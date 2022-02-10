import CreatePost from "./CreatePost";
import Feed from "./Feed";
import Stories from "./Stories/index";

const MainBody = () => {
    return (
        <main className="w-10/12 sm:w-2/3 lg:w-1/2 px-4 md:px-6 lg:px-8 pt-6">
            <Stories />
            <CreatePost />
            <Feed/>
        </main>
    );
};

export default MainBody;
