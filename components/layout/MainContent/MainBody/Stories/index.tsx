import Image from "next/image";


let storiesLinks = [
    {
        user_prefix: "ADF",
        user_img: "https://api.lorem.space/image/face?w=50&h=50&hash=xi52lqeu",
        story_img: "https://api.lorem.space/image/fashion?w=200&h=400&hash=821p0x30",
        user_name: "Another Defensive Family",
    },
    {
        user_prefix: "TNTL",
        user_img: "https://api.lorem.space/image/face?w=50&h=50&hash=bdcenaa4",
        story_img: "https://api.lorem.space/image/watch?w=200&h=400&hash=wlo93t4j",
        user_name: "Try Not To Laugh",
    },
    {
        user_prefix: "Alabama",
        user_img: "https://api.lorem.space/image/face?w=50&h=50&hash=4stncd8w",
        story_img: "https://api.lorem.space/image/car?w=200&h=400&hash=xca35nvi",
        user_name: "Alabama Channel",
    },
    {
        user_prefix: "OT",
        user_img: "https://api.lorem.space/image/face?w=50&h=50&hash=bvurmy10",
        story_img: "https://api.lorem.space/image/movie?w=200&h=400&hash=38fl7rca",
        user_name: "Otrechet",
    },
];

const Stories = () => {
    return (
        <div className="flex w-full place-content-center place-items-center gap-2 relative">
            {/* create story */}
            <div className="card cursor-pointer flex flex-col current-user w-1/3 lg:w-1/5 h-52 shadow-md rounded-xl dark:bg-zinc-800 overflow-hidden" title={'Create story'} aria-label={'Create story'} tabIndex={0}>
                <div className="layover-light relative w-full h-full flex-grow rounded-t-xl group">
                    <Image src={"https://api.lorem.space/image/album?w=200&h=400&hash=spxzfer9"} layout="fill" priority className="rounded-t-xl transition-transform duration-300 group-hover:scale-[1.02] aspect object-cover" alt={'Create story'} />
                </div>
                <div className="relative flex flex-col place-content-end w-full h-1/3">
                    <button className="w-10 h-10 absolute left-1/2 -translate-x-1/2 -top-5 rounded-full z-10 bg-blue-500 border-4 border-zinc-100 dark:border-zinc-800" role={"button"} type={"button"} aria-label={'Create story'} >
                        <span className="bg-repeat w-5 h-5 flex m-auto filter invert sepia contrast-100" style={{ "backgroundImage": 'url("/img/collection-2.png")', "backgroundPosition": "-2px -2px" }}></span>
                    </button>
                    <p className="text-center text-sm font-semibold pt-1 pb-2 text-zinc-800 dark:text-zinc-200">{'Create story'}</p>
                </div>
            </div>
            {/* stories list */}
            {
                storiesLinks?.map((s, i) => {
                    return (
                        <div key={s.user_prefix} className={`card cursor-pointer flex-col current-user ${i >= storiesLinks.length - 2 ? 'w-0 lg:w-1/5' : 'w-1/3 lg:w-1/5'} relative h-52 shadow-md rounded-xl dark:bg-zinc-800 overflow-hidden ${i >= storiesLinks.length - 2 ? 'hidden lg:flex' : 'flex'}`} title={s.user_name} aria-label={s.user_name} tabIndex={0}>
                            <div className="layover-light after:bottom-0 after:absolute after:left-0 after:right-0 after:w-full after:h-6 after:bg-gradient-to-t after:from-zinc-800 relative w-full h-full flex-grow group bg-cover overflow-hidden">
                                <div className="z-10 absolute left-3 top-3 border-4 border-blue-500 rounded-full overflow-hidden w-10 h-10 transition-all">
                                    <span className="relative w-full h-full flex">
                                        <Image src={s.user_img} layout="fill" priority className="rounded-full transition-transform duration-300 group-hover:rotate-3" alt={s.user_prefix} />
                                    </span>
                                </div>
                                <span className="absolute left-3 bottom-3 z-10">
                                    <p className="font-bold dark:text-zinc-200 text-zinc-100 line-clamp-2">{s.user_name}</p>
                                </span>
                                <Image src={s.story_img} layout="fill" priority className="w-full h-full transition-transform duration-300 group-hover:scale-[1.02] aspect-[inherit] object-cover" alt={s.user_name} />
                            </div>
                        </div>
                    )
                })
            }
            {/* see all */}
            <button title="See all stories" type="button" role={'button'} className="bg-light text-light dark:bg-dark z-10 dark:text-dark shadow rounded-full w-10 h-10 absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 flex place-content-center place-items-center" aria-label={'See all stories'}>
                <span>&#10140;</span>
            </button>
        </div>
    )
};

export default Stories;
