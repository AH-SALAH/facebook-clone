import { Dialog, Transition } from '@headlessui/react'
import { useRouter } from 'next/router';
import { Dispatch, Fragment, MouseEvent, ReactNode, SetStateAction, useEffect, useRef, useState } from 'react'

interface IModal {
    children: ReactNode,
    openModal: boolean,
    setOpenModal: Dispatch<SetStateAction<any>>,
    closeModal?: (e?: MouseEvent, setIsOpen?: Dispatch<SetStateAction<any>>) => void,
    routePath?: string,
    size?: string,
    classes?: string
}

/**
 * headless ui modal
 *
 * @param {IModal} { children, openModal, setOpenModal, closeModal, routePath, size, classes }
 * @returns
 */
const Modal = ({ children, openModal, setOpenModal, closeModal, routePath, size, classes }: IModal) => {
    let [isOpen, setIsOpen] = useState(openModal);
    let router = useRouter();
    let currP = useRef(router.asPath);

    useEffect(() => {
        // update locale isOpen
        setIsOpen(openModal);
        // prevent body scroll
        handleBodyScroll(openModal);
        // if routepath supplied then if open modal true, 
        //  go to saved current path or the same route in shalow mode
        if (routePath) {
            if (openModal) {
                router.push(currP.current, routePath, { shallow: true });
            }
            else {
                router.push('', currP.current, { shallow: true });
            }
        }
    }, [openModal]);


    let closeDialog = () => {
        // incase the func externaly supplied
        if (closeModal) {
            closeModal(undefined, setIsOpen);
        }
        else {
            // close
            setIsOpen(false);
            setOpenModal(false);
        }
    };

    /**
     * stop body scroll on modal open
     *
     * @param {boolean} opModal
     */
    let handleBodyScroll = (opModal: boolean) => {
        if (opModal)
            document.body.style.overflowY = 'hidden';
        else
            document.body.style.overflowY = 'auto';
    };

    return (
        <Transition
            appear
            show={isOpen}
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={closeDialog}
                open={!isOpen}
            >
                <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-0"
                        enterTo="opacity-100 scalse-1"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-1"
                        leaveTo="opacity-0 scale-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-zinc-900 opacity-90" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-3"
                        enterTo="opacity-100 translate-y-0"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-3"
                    >

                        <div className={`inline-block ${size ? 'max-w-'+size : 'max-w-full sm:max-w-[33rem] 2xl:max-w-screen-lg'} w-8/12 z-30 relative border border-zinc-700 my-12 overflow-hidden text-left align-middle transition-all transform bg-light dark:bg-zinc-800 dark:hover:bg-zinc-700 text-light dark:text-dark shadow-2xl rounded-2xl ${classes ? classes : ''}`}>
                            {children}
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}

export default Modal;