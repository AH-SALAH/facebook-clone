import { query, collection, orderBy, DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../../../../firebase";
import Feed from "./Feed";

const Feeds = () => {
    let [realTimePosts] = useCollection(query(collection(db, 'posts'), orderBy('timestamp', 'desc')));

    return (
        <>
            {
                realTimePosts && realTimePosts?.docs?.map((post: QueryDocumentSnapshot<DocumentData>, i:number) => (
                    <Feed key={post?.id || post?.data()?.timestamp} i={i} post={post?.data()} />
                ))
            }
        </>
    )
}

export default Feeds;