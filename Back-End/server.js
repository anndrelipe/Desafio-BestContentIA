import "dotenv/config";
import app from "./src/config/app.js";

const SERVER_PORT = process.env.SERVER_PORT ?? "3000";

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`);
});