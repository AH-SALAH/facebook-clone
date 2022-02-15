import { DocumentData } from 'firebase/firestore';
import Link from 'next/link';

const Footer = ({ post }: { post: DocumentData }) => {
    return (
        <>
            <hr className="border-zinc-300 dark:border-zinc-700 w-full" />
            <div className="options px-4 md:px-4 py-1 flex place-content-center place-items-center w-full">
                <Link href={'/'} shallow>
                    <a title="Like" className="w-1/3 h-8 rounded-lg flex gap-2 place-content-center place-items-center text-light hover:bg-zinc-200 dark:text-dark dark:bg-zinc-800 dark:hover:bg-zinc-700">
                        <span className="bg-repeat w-6 h-6 flex contrast-0" style={{ "backgroundImage": 'url("/img/collection-3.png")', "backgroundPosition": "3px -248px" }}></span>
                        <p className="hidden text-xs md:text-xs lg:text-sm lg:flex font-semibold">Like</p>
                    </a>
                </Link>
                <Link href={'/'} shallow>
                    <a title="Comment" className="w-1/3 h-8 rounded-lg flex gap-2 place-content-center place-items-center text-light hover:bg-zinc-200 dark:text-dark dark:bg-zinc-800 dark:hover:bg-zinc-700">
                        <span className="bg-repeat w-6 h-6 flex contrast-0" style={{ "backgroundImage": 'url("/img/collection-3.png")', "backgroundPosition": "0px -98px" }}></span>
                        <p className="hidden text-xs md:text-xs lg:text-sm lg:flex font-semibold">Comment</p>
                    </a>
                </Link>
                <Link href={'/'} shallow>
                    <a title="Share" className="w-1/3 h-8 rounded-lg flex gap-2 place-content-center place-items-center text-light hover:bg-zinc-200 dark:text-dark dark:bg-zinc-800 dark:hover:bg-zinc-700">
                        <span className="bg-repeat w-[18px] h-[19px] flex contrast-0" style={{ "backgroundImage": 'url("/img/collection-3.png")', "backgroundPosition": "1px 31px" }}></span>
                        <p className="hidden text-xs md:text-xs lg:text-sm lg:flex font-semibold">Share</p>
                    </a>
                </Link>
            </div>
        </>
    );
};

export default Footer;
