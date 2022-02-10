import Link from "next/link"
import { ImageProps } from "next/image"
import { ReactElement, ReactPropTypes } from "react"
import { useRouter } from "next/router"

/**
 * reusable link
 *
 * @param {{ title: string, url: string, as?: string, icon?: ReactElement<ImageProps>, classes?: string, other?: ReactPropTypes[] }} { title, url, as, icon, classes, other }
 * @returns FC
 */
const LinkItemH = (
    { title, url, as, icon, classes, other }:
        { title: string, url: string, as?: string, icon?: ReactElement<ImageProps>, classes?: string, other?: ReactPropTypes[] }) => {

    let router = useRouter();

    return (
        <Link href={url} as={as} {...other} shallow>
            <a
                className={`cursor-pointer ${router.asPath === as ? 'text-sky-600 fill-blue-600' : 'hover:bg-zinc-300 fill-zinc-200'} p-2 w-full h-full flex place-content-start place-items-center rounded-lg text-zinc-800 hover:bg-zinc-300 dark:text-zinc-100 dark:hover:bg-zinc-800 gap-2 ${classes ? classes : ''}`}
                title={title}
            >
                <span className="flex place-content-center place-items-center">{icon}</span>
                <span className="font-bold text-sm hidden md:flex">{title}</span>
            </a>
        </Link>
    )
}

export default LinkItemH
