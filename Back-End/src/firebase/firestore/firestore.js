import firebase_connection from "../firebaseConnection.js";
import { getFirestore } from "firebase/firestore";

const db = getFirestore(firebase_connection);

export default db;