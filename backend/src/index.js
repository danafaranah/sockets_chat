import express from "express";
import { socket } from "./socket/chat.socket.js";

const app = express();

app.set("port", 4000);

const server = app.listen(app.get("port"), () => {
    console.log("Servidor escuchando por el puerto", app.get("port"));
});

socket(server)