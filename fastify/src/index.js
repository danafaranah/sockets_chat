import Fastify from "fastify";
import Socket from "fastify-socket.io";
import { socket } from "./socket/chat.socket.js";

const fastify = Fastify({
    logger: true,
});

fastify.register(Socket);

const start = async() => {
    try {
        await fastify.listen({ port: 4000, host: "0.0.0.0" });
        console.log("Server Listening by Port 4000");
        socket(fastify)
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
};

start();