import Image from "next/image"

/**
 * Left header nav menu
 *
 * @returns
 */
const LeftMenu = () => {
    return (
        <div className="left_content flex place-content-start place-items-center px-4 md:w-1/4 gap-2 z-20">
            {/* logo */}
            <span className="flex place-content-start place-items-center w-6 h-6 md:w-10 md:h-10">
                <Image src={'/logo.svg'} width={40} height={40} layout="fixed" alt="logo" />
            </span>
            {/* search bar */}
            <label className="flex place-items-center place-content-center bg-slate-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 rounded-3xl w-6 h-6 md:h-auto md:w-4/5">
                <span className="pl-0 md:pl-3 leading-tight pt-0 md:pt-1 w-4 h-4 flex md:w-auto md:h-auto">
                    <Image src={'/img/search-icon.svg'} width={18} height={18} className="fill-zinc-600 text-zinc-600" layout="fixed" alt="search icon" />
                </span>
                <input placeholder="Search Facebook" type="search" name="menu-search" className="w-full bg-transparent border-none border-0 outline-none p-2 hidden md:flex" />
            </label>
        </div>
    )
}

export default LeftMenu
