import { Transition } from "@headlessui/react";
import { DocumentData } from "firebase/firestore";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const Feed = ({ post, i }: { post: DocumentData, i: number }) => {
    return (
        <section className="sm:px-6 md:px-8 lg:px-12 pt-6 last:mb-4">
            <div className={`animate-slidein delay-[${i * 100}] card feed rounded-xl shadow flex flex-col place-items-start dark:bg-zinc-800`}>
                <Header post={post} />
                <Content post={post} />
                <Footer post={post} />
            </div>
        </section>
    )
};

export default Feed;
