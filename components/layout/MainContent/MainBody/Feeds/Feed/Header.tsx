import { DocumentData, Timestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import ReactTimeAgo from 'react-time-ago';

const Header = ({ post }: { post: DocumentData }) => {
    let { data: session } = useSession();

    let getDate = (date?: Date) => {
        return date?.toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' })
            + ' at '
            + date?.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" })
    };

    return (
        <div className="p-4 flex place-content-between place-items-center w-full gap-2">
            <div className="flex place-content-start place-items-center gap-2 flex-wrap">
                <Image src={post?.image || session?.user?.image || "https://api.lorem.space/image/face?w=50&h=50&hash=crc4vvrn"} width={40} height={40} layout="fixed" className="rounded-full w-5 h-5 md:w-auto md:h-auto" alt={post?.name || session?.user?.name || 'user image'} />
                <div className="title leading-tight">
                    <h6 className="font-bold">{post?.name || session?.user?.name}</h6>
                    <time title={getDate(new Date(post?.timestamp?.toDate()))} className="text-xs text-light dark:text-dark">{<ReactTimeAgo tooltip={false} date={post?.timestamp?.toDate() || Date.now()} timeStyle="twitter" />}</time><span aria-hidden="true"> · </span>
                </div>
            </div>
            <div className="options">
                <Link href={'/'} shallow>
                    <a
                        className={`p-2 cursor-pointer w-8 h-8 flex place-content-start place-items-center rounded-full hover:bg-gray-300 dark:text-slate-100 dark:hover:bg-zinc-700 gap-2`}
                        title={'options'}
                    >
                        <span className="bg-repeat w-5 h-5 flex m-auto filter contrast-100" style={{ "backgroundImage": 'url("/img/collection-1.png")', "backgroundPosition": "-4px -136px" }}></span>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default Header;
