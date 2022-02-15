import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

export const AddData = async (collectionID: string, data: {}) => await addDoc(collection(db, collectionID), data);