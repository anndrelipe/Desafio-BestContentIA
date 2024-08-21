import firebase_connection from "../firebaseConnection.js";
import { getAuth } from "firebase/auth";

const auth = getAuth(firebase_connection);

export default auth