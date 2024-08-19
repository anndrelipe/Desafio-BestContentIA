import "dotenv/config";
import app from "./src/config/app.js";

const SERVER_PORT = process.env.SERVER_PORT ?? 3000;
const SERVER_HOST = process.env.SERVER_HOST ?? "127.0.0.1";

app.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log(`Server listening on http://${SERVER_HOST}:${SERVER_PORT}`);
});