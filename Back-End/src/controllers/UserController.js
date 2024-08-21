import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/auth/auth.js";

class UserController {
    
    static async createUserWithEmailAndPassword (req, res) {

        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({status: 400, message: "Bad Request", content: "Verifique se todos os parametros foram passados."});
            return
        } else if (password.length < 6) {
            res.status(400).json({status: 400, message: "Bad Request", content: "A senha precisa conter no mínimo 6 caractéres."});
            return
        } else if (email.indexOf('@') === -1 || email.indexOf('.com') === -1) {    
            res.status(400).json({status: 400, message: "Bad Request", content: "Verifique se o email segue o formato: username@domain.com"});
            return
        }

        try {

            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                res.status(201).json({status:201, message:"Created", content : {description : "Usuário criado com sucesso!", token: userCredential._tokenResponse.idToken}})
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                
                console.log({errorCode}, {errorMessage})
            })

        } catch (error) {
            res.status(500).json({status: 500, message: "Internal Server Error", content: "Algo inesperado aconteceu no servidor."});
            return
        }
    }

    static async signInWithEmailAndPassword (req, res) {

        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({status: 400, message: "Bad Request", content: "Verifique se todos os parametros foram passados."});
            return
        } else if (password.length < 6) {
            res.status(400).json({status: 400, message: "Bad Request", content: "A senha precisa conter no mínimo 6 caractéres."});
            return
        } else if (email.indexOf('@') === -1 || email.indexOf('.com') === -1) {    
            res.status(400).json({status: 400, message: "Bad Request", content: "Verifique se o email segue o formato: username@domain.com"});
            return
        }

        try {
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                res.status(200).json({status:200, message:"Ok", content: {
                    description : "Usuário logado com sucesso!",
                    token : userCredential._tokenResponse.idToken
                }})
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            
                console.log({errorCode}, {errorMessage});

                res.status(401).json({status:401, message:"Unauthorized", content: "Credenciais inválidas."});
                return
            })

        } catch (error) {
            res.status(500).json({status: 500, message: "Internal Server Error", content: "Algo inesperado aconteceu no servidor."});
            return
        }

    }
}

export default UserController