import Link from "next/link";
import { ImageProps } from "next/image";
import { forwardRef, ReactElement, useState } from "react";
import { useRouter } from "next/router";
import MenuPopover from "../../Popover";
import { signOut } from "next-auth/react";

/**
 * dunamic link item
 *
 * @param {{ title: string, url: string, as?: string, icon?: ReactElement<ImageProps>, notification?: boolean, classes?: string, isTab?: boolean, hasMenu?: boolean, other?: [string] }} { title, url, as, icon, notification, classes, isTab, hasMenu, other }
 * @returns FC
 */
const LinkItem = (
    { title, url, as, icon, notification, classes, isTab, hasMenu, other }:
        { title: string, url: string, as?: string, icon?: ReactElement<ImageProps>, notification?: boolean, classes?: string, isTab?: boolean, hasMenu?: boolean, other?: [string] }) => {

    let router = useRouter();
    const [clicked, setClicked] = useState(!notification);

    let fromTab = isTab ? 'hover:bg-zinc-200 dark:fill-zinc-400 dark:text-zinc-400 dark:hover:bg-zinc-700' : 'dark:fill-zinc-200';

    return (
        <>
            {
                !hasMenu &&
                (
                    <Link href={url} as={as} shallow {...other}>
                        <a
                            className={`relative cursor-pointer ${router.asPath === as ? 'text-sky-600 fill-blue-600' : 'fill-transparent ' + fromTab} w-full h-full flex place-content-center place-items-center ${classes ? classes : ''} ${title !== 'Account' && !isTab && 'hidden sm:flex'}`}
                            title={title}
                            onClick={() => setClicked(true)}
                        // ref={(node: HTMLAnchorElement) => linkRef.current = node}
                        >
                            {
                                icon ?
                                    <span className={`${!isTab && 'p-2 fill-zinc-600 dark:fill-zinc-200 w-8 h-8' || 'w-6 h-6 fill-zinc-600 dark:fill-zinc-400'} md:w-10 md:h-10 flex place-content-center place-items-center fill-zinc-600 dark:fill-zinc-400`} >
                                        {icon}
                                    </span> :
                                    title
                            }
                            {notification && clicked && <span className="rounded-full w-3 h-3 bg-red-600 absolute right-[2px] top-[2px] border-current border dark:border-zinc-800 dark:border-2"></span> || ''}
                        </a>
                    </Link>
                )
                ||
                (
                    <MenuPopover ReferenceEl={
                        forwardRef<HTMLAnchorElement>((props, ref) => <Link href={url} shallow {...other} >
                            <a
                                className={`relative cursor-pointer ${router.asPath === as ? 'text-sky-600 fill-blue-600' : 'fill-transparent ' + fromTab} w-full h-full flex place-content-center place-items-center ${classes ? classes : ''}`}
                                title={title}
                                ref={ref}
                                onClick={() => setClicked(true)}
                            // ref={(node: HTMLAnchorElement) => linkRef.current = node}
                            >
                                {
                                    icon ?
                                        <span className={`${!isTab && 'p-2 fill-zinc-600 dark:fill-zinc-200 w-8 h-8' || 'fill-zinc-600 dark:fill-zinc-400 w-6 h-6'} md:w-10 md:h-10 flex place-content-center place-items-center fill-zinc-600 dark:fill-zinc-400`} >
                                            {icon}
                                        </span> :
                                        title
                                }
                                {notification && !clicked && <span className="rounded-full w-3 h-3 bg-red-600 absolute right-[2px] top-[2px] border-current border dark:border-zinc-800 dark:border-2"></span> || ''}
                            </a>
                        </Link>
                        )}
                    >
                        <button type="button" role={'menuitem'} className='rounded-lg text-light dark:text-dark bg-light dark:bg-dark px-3 py-1 w-full' onClick={() => signOut({ redirect: false })} >Logout</button>
                    </MenuPopover>
                )
            }
        </>
    )
}

export default LinkItem;
