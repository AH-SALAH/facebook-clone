import { serverTimestamp } from "firebase/firestore";
import { AddData } from "../actions";
import { IPOSTMODEL } from "./post_interface";

export const PostData = ({
    message,
    name,
    image,
    email,
    post_image,
    timestamp = serverTimestamp()
}: IPOSTMODEL): IPOSTMODEL => {
    return {
        message,
        name,
        image,
        email,
        post_image,
        timestamp
    }
};

export const addPost = (data: IPOSTMODEL) => AddData('posts', PostData(data));