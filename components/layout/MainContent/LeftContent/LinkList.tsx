import Image from "next/image"
import Link from "next/link"
import LinkItemH from "./LinkItemH"
import Friends from "/public/img/friends.png"
import Groups from "/public/img/groups.png"
import Marketplace from "/public/img/market.png"
import Watch from "/public/img/watch.png"
import Memo from "/public/img/memo.png"
import Saved from "/public/img/saved.png"
import Pages from "/public/img/pages.png"
import Events from "/public/img/events.png"
import Recent from "/public/img/recent.png"
import Favourite from "/public/img/fav.png"
import SeeMore from "/public/img/seemore.svg"
import { useSession } from "next-auth/react"

let links = [
    {
        title: 'Find Friends',
        url: '/friends',
        icon: <Image src={Friends} width={28} height={28} layout="fixed" alt="Find Friends" />
    },
    {
        title: 'Groups',
        url: '/groups',
        icon: <Image src={Groups} width={28} height={28} layout="fixed" alt="Groups" />
    },
    {
        title: 'Marketplace',
        url: '/marketplace',
        icon: <Image src={Marketplace} width={28} height={28} layout="fixed" alt="Marketplace" />
    },
    {
        title: 'Watch',
        url: '/watch',
        icon: <Image src={Watch} width={28} height={28} layout="fixed" alt="Watch" />
    },
    {
        title: 'Memories',
        url: '/memories',
        icon: <Image src={Memo} width={28} height={28} layout="fixed" alt="Memories" />
    },
    {
        title: 'Saved',
        url: '/saved',
        icon: <Image src={Saved} width={28} height={28} layout="fixed" alt="Saved" />
    },
    {
        title: 'Pages',
        url: '/pages',
        icon: <Image src={Pages} width={28} height={28} layout="fixed" alt="Pages" />
    },
    {
        title: 'Events',
        url: '/events',
        icon: <Image src={Events} width={28} height={28} layout="fixed" alt="Events" />
    },
    {
        title: 'Most Recent',
        url: '/mostRecent',
        icon: <Image src={Recent} width={28} height={28} layout="fixed" alt="Most Recent" />
    },
    {
        title: 'Favourites',
        url: '/favourites',
        icon: <Image src={Favourite} width={28} height={28} layout="fixed" alt="Favourites" />
    },
];

const LinkList = () => {
    let { data: session } = useSession();

    return (
        <>
            {/* user link */}
            <span className={`flex place-content-center place-items-center overflow-hidden`} tabIndex={0} aria-label={'me'}>
                <Link href={'/'} as={'/me'} shallow>
                    <a
                        className={`py-2 px-1 sm:px-2 cursor-pointer w-full h-full flex place-content-center sm:place-content-start place-items-center rounded-lg text-zinc-800 hover:bg-zinc-300 dark:text-zinc-100 dark:hover:bg-zinc-800 gap-2`}
                        title={'me'}
                    >
                        <Image src={session?.user?.image || 'https://api.lorem.space/image/face?w=30&h=30&hash=crc4vvrn'} width={30} height={30} layout="fixed" className="rounded-full" alt="user image" />
                        <span className="font-semibold text-sm hidden md:flex">{session?.user?.name}</span>
                    </a>
                </Link>
            </span>
            {
                // dynamic links generation
                links.map((l, i) => {
                    return (
                        <span key={l.title} className={`flex place-content-center place-items-center overflow-hidden`} tabIndex={0} aria-label={l.title}>
                            <LinkItemH url={'/'} title={l.title} icon={l.icon} as={l.url} />
                        </span>
                    )
                })
            }
            {/* see more link */}
            <span className={`flex place-content-center place-items-center overflow-hidden`} aria-label={'See more'}>
                <Link href={'/'} as={'/see-more-services'} shallow>
                    <a
                        className={`p-2 cursor-pointer w-full h-full flex place-content-center sm:place-content-start place-items-center rounded-lg text-zinc-800 hover:bg-zinc-300 dark:text-zinc-100 dark:hover:bg-zinc-800 gap-2`}
                        title={'see more services'}
                    >
                        <span className="rounded-full w-7 h-7 flex place-content-center place-items-center bg-zinc-300 dark:bg-zinc-700">
                            <SeeMore width={20} height={20} layout="fixed" className="rounded-full fill-zinc-600 dark:fill-zinc-200" />
                        </span>
                        <span className="font-semibold text-sm hidden md:flex">{'See More'}</span>
                    </a>
                </Link>
            </span>
        </>
    )
}

export default LinkList
