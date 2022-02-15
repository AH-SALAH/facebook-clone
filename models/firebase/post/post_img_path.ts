import { DocumentReference } from "firebase/firestore";
import { Session } from "next-auth";

export let POSTIMGPATH = (post:DocumentReference<{}>, session?:Session | null) => `posts/${session?.user?.email || session?.user?.name || 'userpost_'+post.id}/${post.id}`;