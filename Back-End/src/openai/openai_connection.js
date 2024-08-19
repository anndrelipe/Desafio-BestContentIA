import OpenAI from "openai";

const returnOpenaiConfig = () => {
    const openai = new OpenAI({
        organization: "org-cmFpacFoMBOfrwjjXdrMClJU",
        project: "proj_yLpjn0RTm3O6b6lODxbdscYs",
        baseURL: process.env.API_URL,
        apiKey: process.env.API_KEY
    });

    return openai
}

export default returnOpenaiConfig