import firebase_connection from "../firebaseConnection.js";
import { getStorage, ref } from "firebase/storage";

const storage = getStorage(firebase_connection);

function criaStorageRef (fileName) {
    const storageRef = ref(storage, `/images/${fileName}`)
    return storageRef
}

export default criaStorageRef