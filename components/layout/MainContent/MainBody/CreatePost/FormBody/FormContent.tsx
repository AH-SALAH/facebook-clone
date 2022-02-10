import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { object as yupObject, string } from "yup";
import { useCallback, useEffect, useRef } from "react";
import FileUpload from "../../../../../FileUpload";
import { useUppyUpload } from "../../../../../FileUpload/Uppy";
import { isEmpty } from "../../../../../../utils/isEmpty"

const FormContent = () => {
    let { data: session } = useSession();
    let upy = useCallback(() => useUppyUpload(), []);

    const schema = yupObject({
        post: string().required().trim(),
    });

    let { register, handleSubmit, formState: { errors, isValid }, clearErrors, setFocus } = useForm({
        resolver: yupResolver(schema),
        mode: 'all'
    });

    useEffect(() => {
        setFocus("post");
    }, [setFocus]);

    let onSubmit = handleSubmit(data => console.log("form data: ", data, isValid));

    return (
        <div className="px-3 flex flex-col place-content-center place-items-center w-full gap-2 flex-wrap">
            <form onSubmit={onSubmit} className={'grow w-full'}>
                <label htmlFor="post" className={`${errors?.post && 'border border-red-500' || 'border border-transparent'} w-full flex grow rounded-xl cursor-pointer text-light dark:text-dark`}>
                    <textarea
                        onFocus={e => e.currentTarget.select()}
                        className={`border-none border-0 w-full bg-transparent outline-none px-2 md:px-4 placeholder:text-zinc-600 dark:placeholder:text-zinc-400 py-2 leading-4 text-lg placeholder:text-xl placeholder:font-medium md:text-xl resize-none`}
                        placeholder={`What's on your mind, ${session?.user?.name?.split(' ')?.[0] || 'dude'}?`}
                        {...register('post')}
                        onBlur={() => isEmpty(errors) === false && clearErrors()}
                        rows={3}
                    ></textarea>
                </label>
            </form>
            <FileUpload upy={upy()} />
        </div>
    );
};

export default FormContent;