import criaStorageRef from "../firebase/storage/storage.js";
import { uploadBytesResumable, getDownloadURL } from "firebase/storage";

class ImageUploadController {
    static async sendImageToStorage (req, res) {
        const files = req.files;

        if (!files || files.length === 0) {
            res.status(400).json({status: 400, message: "Bad Request", content: "Nenhuma imagem foi selecionada."});
            return
        }

        for (const file of files) {
            const storageRef = criaStorageRef(file.originalname);
            const uploadTask = uploadBytesResumable(storageRef, file);
    
            uploadTask.on('state_changed',
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    }, 
                    (err) => {
                        console.log(err);
                        return
                        },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        });
                    }
                    );
        }
    }
}

export default ImageUploadController