import LinkItem from "./LinkItem";
import HomeIcon from '/public/img/home-icon.svg';
import FriendsIcon from '/public/img/friends-icon.svg';
import WatchIcon from '/public/img/watch-icon.svg';
import MarketIcon from '/public/img/market-icon.svg';
import GamingIcon from '/public/img/gaming-icon.svg';
import { useRouter } from "next/router";


const tabs = [
    {
        name: "Home",
        url: "/",
        icon: <HomeIcon width={28} height={28}/>,
    },
    {
        name: "Friends",
        url: "/friends",
        icon: <FriendsIcon width={28} height={28}/>,
    },
    {
        name: "Watch",
        url: "/watch",
        icon: <WatchIcon width={28} height={28}/>,
    },
    {
        name: "Marketplace",
        url: "/marketplace",
        icon: <MarketIcon width={28} height={28}/>,
    },
    {
        name: "Gaming",
        url: "/gaming",
        icon: <GamingIcon width={28} height={28}/>,
    },
];

/**
 * Tab menu bar
 *
 * @returns FC
 */
const TabMenu = () => {
    let router = useRouter();
    return (
        <nav className="center_menu flex place-content-center place-items-stretch grow gap-2">
            {
                // dynamic links
                tabs.map(t => {
                    return (
                        <span key={t.name} className={`w-2/12 flex place-content-center place-items-center py-1 transition-all ${router.asPath === t.url ? 'border-b-4 border-blue-600' : ''}`}>
                            <LinkItem title={t.name} url={'/'} as={t.url} icon={t.icon} classes="rounded-lg w-full h-full" isTab/>
                        </span>
                    )
                })
            }
        </nav>
    )
}

export default TabMenu
