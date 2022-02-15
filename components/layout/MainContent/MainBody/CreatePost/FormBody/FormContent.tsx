import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { object as yupObject, string } from "yup";
import { useContext, useEffect, useState } from "react";
import FileUpload from "../../../../../FileUpload";
import { isEmpty } from "../../../../../../utils/isEmpty"
import { storage } from "../../../../../../firebase";
import { getDownloadURL, ref, StorageError, uploadBytesResumable, UploadTaskSnapshot } from "firebase/storage";
import { addPost } from "../../../../../../models/firebase/post/add_post";
import prettyBytes from "pretty-bytes";
import { DocumentReference, setDoc } from "firebase/firestore";
import { POSTIMGPATH } from "../../../../../../models/firebase/post/post_img_path";
import Uppy from "@uppy/core";
import { ModalStatusCtx } from "../OpenCreateModalProvider";

const FormContent = ({ upy }: { upy: Uppy }) => {
    let { data: session } = useSession();
    let [firstLoad, setFirstLoad] = useState(false);
    let [loading, setLoading] = useState(false);
    let [progress, setProgress] = useState(0);
    let [bytes, setBytes] = useState('');
    let [uploadComplete, setUploadComplete] = useState(false);
    let [uploadError, setUploadError] = useState(false);
    let { setOpenModal } = useContext(ModalStatusCtx);

    // set some uppy option on the fly
    upy.setOptions({
        restrictions: {
            maxNumberOfFiles: 1,
            allowedFileTypes: ['.jpg', '.jpeg', '.png', '.gif']
        },
        meta: {
            username: session?.user?.email,
        },
    });

    // set yup's form dtype & validation schema
    let schema = yupObject({
        message: string().required().trim(),
    });

    // init react-hook-form
    let { register, handleSubmit, formState: { errors, isValid, isSubmitting }, clearErrors, setFocus, reset } = useForm({
        resolver: yupResolver(schema),
        mode: 'all'
    });

    // reset all
    let handleReset = () => {
        reset();
        upy.reset();
        setOpenModal(false);
    };

    useEffect(() => {
        // on first load set field focus
        if (!firstLoad) {
            setFirstLoad(true);
            setFocus("message");
        }
        // load on submit
        if (isSubmitting) setLoading(true);
        // else setLoading(false);

        // incase there are uploads & its complete, reset after complete
        if (uploadComplete) handleReset();
        // eslint-disable-next-line
    }, [setFocus, isSubmitting, uploadComplete]);

    // TODO: extract this logic
    let handleUpload = async (post: DocumentReference<{}>) => {
        try {
            let storageRef = ref(storage, POSTIMGPATH(post, session));
            let uploadTask = uploadBytesResumable(storageRef, upy.getFiles()?.[0].data);

            // watch & update on progress
            let prevProgress = -1;
            let next = (snapshot: UploadTaskSnapshot) => {
                let percentage = Math.round(snapshot?.bytesTransferred / snapshot?.totalBytes * 100);

                if (prevProgress !== percentage) {
                    // upate view on percentage change
                    let interv = setInterval(() => {
                        if (prevProgress >= percentage || percentage === 100) {
                            prevProgress = percentage;
                            // update progress state
                            setProgress(prevProgress);
                            // update bytes state
                            setBytes(prettyBytes(snapshot.bytesTransferred) + ' / ' + prettyBytes(snapshot.totalBytes));
                            clearInterval(interv);
                            return;
                        }
                        prevProgress++;
                        setProgress(prevProgress);
                        setBytes(prettyBytes(snapshot.bytesTransferred) + ' / ' + prettyBytes(snapshot.totalBytes));
                    }, 10);
                }
            };

            // handle error state
            let error = (err: StorageError) => {
                setUploadError(true);
                setLoading(false);
                console.log("upload:error: ", err);
            };

            // handle after complete
            let complete = async () => {
                // get uploaded file url
                let post_image = await getDownloadURL(uploadTask.snapshot.ref);
                // update post table
                await setDoc(post, { post_image }, { merge: true });
                setUploadComplete(true);
                setLoading(false);
            };

            uploadTask.on('state_changed', next, error, complete);

        } catch (error) {
            console.log("handle upload:error: ", error);
        }

    };

    let onSubmit = handleSubmit(async (data, e) => {
        try {
            // add post
            let post = await addPost({
                message: data.message,
                name: session?.user?.name || '',
                image: session?.user?.image || '',
                email: session?.user?.email || '',
                post_image: null
            });

            // if there are files to upload, upload
            if (upy.getFiles().length) {
                await handleUpload(post);
            }
            else {
                handleReset();
            }

        } catch (error) {
            console.log("add post error: ", error);
        } finally {
            if (!upy.getFiles().length) setLoading(false);
        }
    }, er => {
        console.log("form error: ", er);
        setLoading(false);
    });

    let lastProgressPortion = progress >= progress - (progress / 5) ? 'bg-green-300' : 'bg-blue-600';
    let chkUpBgState = uploadError ? 'bg-red-600' : lastProgressPortion;

    return (
        <div className="px-2 flex flex-col place-content-center place-items-center w-full gap-2 flex-wrap">
            <form onSubmit={onSubmit} className={'grow w-full'}>
                <label htmlFor="message" className={`${errors?.message && 'border border-red-500' || 'border border-transparent'} px-2 w-full flex grow rounded-xl cursor-pointer text-light dark:text-dark my-3`}>
                    <textarea
                        className={`border-none border-0 w-full bg-transparent outline-none px-1 py-2 placeholder:text-zinc-600 dark:placeholder:text-zinc-400 leading-4 text-lg placeholder:text-xl placeholder:font-medium md:text-xl resize-none`}
                        placeholder={`What's on your mind, ${session?.user?.name?.split(' ')?.[0] || 'dude'}?`}
                        {...register('message')}
                        onFocus={e => e.currentTarget.select()}
                        onBlur={() => isEmpty(errors) === false && clearErrors()}
                        rows={3}
                    ></textarea>
                </label>
                <FileUpload upy={upy} loading={loading} />
                {/* TODO: extract this div as a component */}
                <div className="transition-all px-2 mb-1 w-full flex flex-col place-content-center place-items-start gap-1">
                    {
                        !!progress &&
                        <span className={`${progress === 100 && !uploadError ? 'bg-green-500' : chkUpBgState} h-[3px] transition-all rounded-md`} style={{ 'width': `${progress}%` }}></span>
                        ||
                        ''
                    }
                    {
                        !!bytes &&
                        <span className="w-full flex place-content-between place-items-center gap-1">
                            <small>{progress} %</small>
                            <small>{bytes}</small>
                        </span>
                        ||
                        ''
                    }
                </div>
                <div className="submit px-2 pb-4 relative">
                    <button type="submit" disabled={loading || !isValid} className="disabled:bg-zinc-400 disabled:bg-opacity-20 disabled:border disabled:border-zinc-500 flex place-content-center place-items-center gap-1 active:bg-blue-500 text-center submit-btn bg-primary p-2 w-full rounded-lg cursor-pointer" >
                        <span className={`btn-loading ${loading && '' || 'hidden'}`}></span>
                        <span className="submit-text">Post</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormContent;