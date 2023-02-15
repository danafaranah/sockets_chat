import { Server } from "socket.io";

let messages = [{ message: "Hello World", hour: 1676132374113 }];

export const socket = (server) => {
    const io = new Server(server);

    io.on("connection", (socket) => {
        console.log("User Connected", socket.id);

        const sendMessages = () => {
            io.emit("server:getMessages", messages);
        };

        sendMessages();

        socket.on("client:addMessage", (message) => {
            messages.push(message);
            sendMessages();
        });

        socket.on("disconnect", () => {
            console.log("User Disconnected", socket.id);
        });
    });
};