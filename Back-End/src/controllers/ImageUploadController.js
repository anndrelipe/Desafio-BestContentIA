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

            const metadata = {
                contentType: file.mimetype
            }

            const uploadTask = uploadBytesResumable(storageRef, file.buffer, metadata);
            
            uploadTask.on('state_changed', 
                (snapshot) => {
                  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log('Upload is ' + progress + '% done');
                }, 
                (error) => {
                  console.log(error);
                }, 
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        res.status(201).json({status: 201, message: "Created", content: {
                            name : file.originalname,
                            type : file.mimetype,
                            url  : downloadURL
                        }});
                      });
                }
              );
        }        

    }

    static async receiveAnImage (req, res) {

        const image_name = req.params.name;

        if (!image_name) {
            res.status(400).json({status: 400, message: "Bad Request", content: "Nenhuma imagem foi definida para busca." + image_name});
            return
        }

        try {
            const pathRef = criaStorageRef(image_name);

            getDownloadURL(pathRef)
            .then((url) => {
                res.status(200).json({status: 200, message: "Ok", content: url});
            })

        } catch (error) {
            res.status(500).json({status: 500, message: "Internal Server Error", content: "Algo inesperado aconteceu no servidor."});
            return    
        }


    }
}

export default ImageUploadController