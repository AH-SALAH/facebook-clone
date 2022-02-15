import { Dialog } from "@headlessui/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import ReactTimeAgo from 'react-time-ago';

const FormHeader = () => {
    let { data: session } = useSession();

    let getDate = (date: Date) => {
        return date.toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }) + ' at ' + date.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" })
    };

    return (
        <div className="flex flex-col place-content-between place-items-center w-full gap-2">
            <Dialog.Title
                as="h2"
                className="text-xl font-bold leading-6 p-4"
            >
                <header className="text-center">Create post</header>
            </Dialog.Title>
            <hr className="p-1 w-full border-zinc-600" />
            <div className="px-4 pb-2 w-full flex place-content-start place-items-center gap-2 flex-wrap">
                <Image src={session?.user?.image || "https://api.lorem.space/image/face?w=50&h=50&hash=crc4vvrn"} width={40} height={40} layout="fixed" className="rounded-full w-5 h-5 md:w-auto md:h-auto" alt={session?.user?.name || 'user image'} />
                <div className="title leading-tight">
                    <h6 className="font-bold">{session?.user?.name}</h6>
                    <time title={getDate(new Date())} className="text-xs text-light dark:text-dark">{<ReactTimeAgo tooltip={false} date={new Date()} timeStyle="twitter" />}</time><span aria-hidden="true"> · </span>
                </div>
            </div>
            {/* <div className="options">
                <Link href={'/'} shallow>
                    <a
                        className={`p-2 cursor-pointer w-8 h-8 flex place-content-start place-items-center rounded-full hover:bg-gray-300 dark:text-slate-100 dark:hover:bg-zinc-700 gap-2`}
                        title={'options'}
                    >
                        <span className="bg-repeat w-5 h-5 flex m-auto filter contrast-100" style={{ "backgroundImage": 'url("/img/collection-1.png")', "backgroundPosition": "-4px -136px" }}></span>
                    </a>
                </Link>
            </div> */}
        </div>
    );
};

export default FormHeader;
