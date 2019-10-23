import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Comment";

// 이런 식으로 key를 숨긴다.
const PORT = process.env.PORT || 4000;;

const handleListening = () => 
    console.log(`★ Listening on : http://localhost:${PORT}`);

app.listen(PORT, handleListening);