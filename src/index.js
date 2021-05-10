const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();

//Initialize http server
const server = http.createServer(app);

//Initialize websocket server from http server
const wss = new WebSocket.Server({ server });

//Connection websocket
wss.on("connection", (ws) => {
    //Messages handling
    ws.on("message", (message) => {
        console.log("Message received: ", message);
        //x1
        ws.send(message);
        //x2
        ws.send(message);
    });
});

//Initialize server
server.listen(process.env.PORT || 9898, () => {
    console.log("Listening at port:", server.address().port);
});