import LinkItem from "./LinkItem"
import MenuIcon from '/public/img/menu.svg'
import MessengerIcon from '/public/img/messenger.svg'
import NotificationIcon from '/public/img/notification.svg'
import AccountIcon from '/public/img/account.svg'
import Link from "next/link"
import Image from "next/image"
import { useSession } from "next-auth/react"


const btns = [
    {
        name: "Menu",
        url: "/menu",
        icon: <MenuIcon width={20} height={20} />,
        new: false,
        hasMenu: false,
    },
    {
        name: "Messenger",
        url: "/messenger",
        icon: <MessengerIcon width={20} height={20} />,
        new: false,
        hasMenu: false,
    },
    {
        name: "Notifications",
        url: "/notifications",
        icon: <NotificationIcon width={20} height={20} />,
        new: false,
        hasMenu: false,
    },
    {
        name: "Account",
        url: "/account",
        icon: <AccountIcon width={20} height={20} />,
        new: true,
        hasMenu: true,
    },
];

/**
 * app Right header menu
 *
 * @returns FC
 */
const RightMenu = () => {
    let { data: session } = useSession();

    return (
        <div className="right_menu relative flex place-content-end place-items-center px-4 md:w-1/4 gap-2 z-20">
            {/* user badge */}
            <span className={`hidden lg:flex place-content-center place-items-center overflow-hidden`}>
                <Link href={'/'} as={'/me'} shallow>
                    <a
                        className={`p-1 pr-2 cursor-pointer w-full h-full flex place-content-center place-items-center rounded-full font-bold hover:bg-slate-200 dark:text-zinc-200 dark:hover:bg-zinc-700 gap-1`}
                        title={'me'}
                        role={"button"}
                        // onClick={() => signOut({redirect: false})}
                    >
                        <Image src={session?.user?.image || 'https://api.lorem.space/image/face?w=30&h=30&hash=crc4vvrn'} width={30} height={30} layout="fixed" className="rounded-full" alt={session?.user?.name || 'user image'} />
                        <span className="hidden md:flex whitespace-nowrap text-sm">{session?.user?.name?.match(/(\w)+/gi)?.[0]}</span>
                    </a>
                </Link>
            </span>
            {
                // dynmic menu links
                btns.map(b => {
                    return (
                        <span key={b.name} className={`flex place-content-center place-items-center ${b.name !== 'Account' && 'hidden sm:flex' || ''}`}>
                            <LinkItem url={'/'} as={b.url} title={b.name} icon={b.icon} notification={b.new} classes="rounded-full bg-light dark:bg-dark w-7 h-7 md:w-10 md:h-10" hasMenu={b.hasMenu} other={[`className=${b.name !== 'Account' && 'hidden sm:flex'}`]} />
                        </span>
                    )
                })
            }
        </div>
    )
}

export default RightMenu
