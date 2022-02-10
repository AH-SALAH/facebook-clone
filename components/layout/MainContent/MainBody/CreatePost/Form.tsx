import Image from "next/image";
import { useSession } from "next-auth/react";
import { ModalStatusCtx } from "./OpenCreateModalProvider";
import { FocusEventHandler, useContext } from "react";

const Form = () => {
    let { data: session } = useSession();
    let { setOpenModal } = useContext(ModalStatusCtx);

    let handleClickPV: FocusEventHandler = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setOpenModal(true);
    };

    return (
        <div className="py-4 flex place-content-center place-items-center w-full gap-2 flex-wrap">
            <Image src={session?.user?.image || "https://api.lorem.space/image/face?w=50&h=50&hash=crc4vvrn"} width={40} height={40} layout="fixed" className="rounded-full" alt={session?.user?.name || 'user image'} />
            <form className={'grow'}>
                <label htmlFor="post" className={`border border-transparent w-full flex grow rounded-3xl cursor-pointer bg-light text-light dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-dark`}>
                    <input
                        type={"text"}
                        className={`cursor-pointer border-none border-0 w-full bg-transparent outline-none px-2 md:px-4 placeholder:text-zinc-600 dark:placeholder:text-zinc-400 py-2 leading-4 text-sm md:text-base`}
                        placeholder={`What's on your mind, ${session?.user?.name?.split(' ')?.[0] || 'dude'}?`}
                        onFocus={handleClickPV}
                    />
                </label>
            </form>
        </div>
    );
};

export default Form;