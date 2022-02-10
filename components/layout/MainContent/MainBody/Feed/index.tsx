import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const Feed = () => {

    return (
        <section className="sm:px-6 md:px-8 lg:px-12 pt-6 last:mb-4">
            <div className="card feed rounded-xl shadow flex flex-col place-items-start dark:bg-zinc-800">
                <Header />
                <Content />
                <Footer />
            </div>
        </section>
    )
};

export default Feed;
