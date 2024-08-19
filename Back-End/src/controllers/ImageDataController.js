import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import db from "../firebase/firestore/firestore.js";

class ImageDataController {

    static async sendImageData (req, res) {

        try {
            const {image_name, keywords_list} = req.body;

            if (image_name === undefined || keywords_list === undefined) {
                res.status(400).json({status: 400, message: "Bad Request", content: "Verifique se todos os parametros foram enviados."})
                return
            } 

            const data = {
                image_name    : image_name,
                keywords_list : keywords_list
            }

            const docRef = await addDoc(collection(db, "image-data"), data);
            res.status(201).json({status: 201, message: "Created", content: data});

        } catch (error) {
            res.status(500).json({status: 500, message: "Internal Server Error", content: "Algo inesperado aconteceu no servidor."});
        }
    }

    static async receiveAllImagesData (req, res) {

        try {
            const result = [];
            const datas = await getDocs(collection(db, "image-data"));

            datas.forEach((data) => {result.push({id: data.id, ...data.data()})});

            if (result.length === 0) {
                res.status(404).json({status: 404, message: "Not Found", content: "Nenhuma informação de imagem encontrada."})
                return
            }

            res.status(200).json({status: 200, message: "Ok", content: result})

        } catch (error) {
            res.status(500).json({status: 500, message: "Internal Server Error", content: "Algo inesperado aconteceu no servidor."});
        }
    }

    static async editAnImageData (req, res) {

        try {
            const datas = [];
            const listOfData = await getDocs(collection(db, "image-data"));
            listOfData.forEach((doc) => {datas.push({id: doc.id, ...doc.data()})});

            const id = req.params.id;
            const {image_name, keywords_list} = req.body;

            for (const data of datas) {

                if (data.id === id) {
                    const replaceble = doc(db, "image-data", id);

                    const updated_data = {
                        image_name      :  image_name,
                        keywords_list   :  keywords_list
                    }
            
                    await setDoc(replaceble, updated_data);
                    res.status(200).json({status: 200, message: "Ok", content: "Dados atualizados com sucesso!"})
                } else {
                    res.status(404).json({status: 404, message: "Not Found", content: "Não existe informações de imagem para o id enviado."})
                    return
                }
            }

        } catch (error) {
            res.status(500).json({status: 500, message: "Internal Server Error", content: "Algo inesperado aconteceu no servidor."});
            return
        }
    }

    static async deleteAnImageData (req, res) {

        try {
            const datas = [];
            const listOfData = await getDocs(collection(db, "image-data"));
            listOfData.forEach((doc) => {datas.push({id: doc.id, ...doc.data()})});

            const id = req.params.id;

            for (const data of datas) {

                if (data.id === id) {
                    const path = doc(db, "image-data", id);

                    await deleteDoc(path);
                    res.status(200).json({status: 200, message: "Ok", content: "Dados apagados com sucesso!"})
                } else {
                    res.status(404).json({status: 404, message: "Not Found", content: "Não existe informações de imagem para o id enviado."})
                    return
                }
            }

        } catch (error) {
            res.status(500).json({status: 500, message: "Internal Server Error", content: "Algo inesperado aconteceu no servidor."});
            return
        }
    }
}

export default ImageDataController