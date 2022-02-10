import Footer from "./Footer";
import Form from "./Form";
import CreateModal from "./CreateModal";
import OpenCreateModalProvider from "./OpenCreateModalProvider";

const CreatePost = () => {
    return (
        <section className="sm:px-6 md:px-8 lg:px-12 pt-6">
            <div className="card post-form rounded-xl shadow flex flex-col place-items-start px-3 md:px-4 dark:bg-zinc-800">
                <OpenCreateModalProvider>
                    <Form />
                    <Footer />
                    <CreateModal />
                </OpenCreateModalProvider>
            </div>
        </section>
    )
};

export default CreatePost;
