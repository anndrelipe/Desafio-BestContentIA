import returnOpenaiConfig from "../openai/openai_connection.js"

const openai = returnOpenaiConfig();

class ChatGptController {
    static async sendAQuestion (req, res) {
        const {question} = req.body;

        if (!question) {
            res.status(400).json({status: 400, message: "Bad Request", content: "Pergunta não enviada."});
            return
        }

        try {
            const completion = await openai.chat.completions.create({
                messages: [
                    { role: "system", content: "Você é um assistente especializado em modalidades esportivas olímpicas." },
                    { role: "user", content: question }
                ],
                model: "gpt-4o-mini",
              });
            
              res.status(201).json({status: 201, message: "Created - Pergunta enviada", content: completion.choices[0].message.content});
        } catch (error) {
            res.status(500).json({status: 500, message: "Internal Server Error", content: "Algo inesperado aconteceu no servidor."});
            console.log(error)
            return
        }
    }
}

export default ChatGptController