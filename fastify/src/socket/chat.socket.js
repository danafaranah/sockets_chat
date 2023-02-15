let messages = [{ message: "Hello World", hour: 1676132374113 }];

export const socket = (fastify) => {


    fastify.io.on("connection", (socket) => {
        console.log("User Connected", socket.id);

        const sendMessages = () => {
            fastify.io.emit("server:getMessages", messages);
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