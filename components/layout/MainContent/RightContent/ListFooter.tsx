import Link from "next/link";

let links = [
    {
        name: 'Privacy',
    },
    {
        name: 'Terms',
    },
    {
        name: 'Advertising',
    },
    {
        name: 'Ad Choices',
    },
    {
        name: 'Cookies',
    },
    {
        name: 'More',
    },
];

/**
 * right widget footer
 *
 * @returns FC
 */
const ListFooter = () => {
    return (
        <span className={`flex flex-col place-content-center place-items-start overflow-hidden`} aria-label={'Group conversations'}>
            {/* title */}
            <p className="font-semibold pb-2 px-2 dark:text-zinc-400 lg:text-lg w-full hidden md:flex">{'Group conversations'}</p>
            {/* links for create group */}
            <Link href={'/'} shallow>
                <a
                    className={`p-2 mb-2 cursor-pointer w-full flex place-content-start place-items-center rounded-lg hover:bg-gray-300 dark:text-slate-100 dark:hover:bg-zinc-800 gap-2`}
                    title={'Create new group'}
                >
                    <div className="p-2 cursor-pointer w-7 h-7 flex place-content-start place-items-center rounded-full bg-zinc-300 dark:bg-zinc-700">
                        <span className="bg-repeat w-4 h-4 flex filter dark:invert contrast-100" style={{ "backgroundImage": 'url("/img/collection-3.png")', "backgroundPosition": "-25px 125px" }}></span>
                    </div>
                    <span className="font-semibold hidden md:flex text-sm lg:text-base">{'Create new group'}</span>
                </a>
            </Link>
        </span>
    )
}

export default ListFooter;
