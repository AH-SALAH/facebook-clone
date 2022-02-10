import LeftContent from "./LeftContent";
import MainBody from "./MainBody";
import RightContent from "./RightContent";

const MainContent = () => {
    return (
        <main className="flex place-content-between place-items-start w-full px-1 md:px-2">
            <LeftContent/>
            <MainBody/>
            <RightContent/>
        </main>
    )
}

export default MainContent;
