import Link from 'next/link';
import { MouseEventHandler, useContext } from 'react';
import { ModalStatusCtx } from './OpenCreateModalProvider';

const Footer = () => {
    let { setOpenModal } = useContext(ModalStatusCtx);

    let handleClickPV: MouseEventHandler = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setOpenModal(true);
    };

    return (
        <>
            <hr className="border-zinc-300 dark:border-zinc-700 w-full" />
            <div className="options py-[10px] flex place-content-center place-items-center w-full">
                <Link href={'/'} shallow>
                    <a title="Live video" className="w-1/3 h-10 rounded-lg flex gap-2 place-content-center place-items-center text-light hover:bg-zinc-200 dark:text-dark dark:bg-zinc-800 dark:hover:bg-zinc-700">
                        <span className="bg-repeat w-6 h-6 flex" style={{ "backgroundImage": 'url("/img/collection-1.png")', "backgroundPosition": "0px -83px" }}></span>
                        <p className="hidden text-xs md:text-xs lg:text-sm lg:flex font-semibold">Live video</p>
                    </a>
                </Link>
                <Link href={'/'} shallow>
                    <a onClick={handleClickPV} title="Photo/video" className="w-1/3 h-10 rounded-lg flex gap-2 place-content-center place-items-center text-light hover:bg-zinc-200 dark:text-dark dark:bg-zinc-800 dark:hover:bg-zinc-700">
                        <span className="bg-repeat w-6 h-6 flex" style={{ "backgroundImage": 'url("/img/collection-1.png")', "backgroundPosition": "0px -282px" }}></span>
                        <p className="hidden text-xs md:text-xs lg:text-sm lg:flex font-semibold">Photo/video</p>
                    </a>
                </Link>
                <Link href={'/'} shallow>
                    <a title="Feeling/activity" className="w-1/3 h-10 rounded-lg flex gap-2 place-content-center place-items-center text-light hover:bg-zinc-200 dark:text-dark dark:bg-zinc-800 dark:hover:bg-zinc-700">
                        <span className="bg-repeat w-6 h-6 flex" style={{ "backgroundImage": 'url("/img/collection-1.png")', "backgroundPosition": "0px -232px" }}></span>
                        <p className="hidden text-xs md:text-xs lg:text-sm lg:flex font-semibold">Feeling/activity</p>
                    </a>
                </Link>
            </div>
        </>
    );
};

export default Footer;
