import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import TabMenu from "./TabMenu";

const Header = () => {
    return (
        <header className="w-full shadow-md h-14 place-content-center place-items-center">
            <div className="menu flex place-content-between place-items-centers w-full h-full bg-slate-50 dark:bg-zinc-800">
                <LeftMenu />
                <TabMenu />
                <RightMenu />
            </div>
        </header>
    )
}

export default Header;
