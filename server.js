"use strict";
const token = process.env.WHATSAPP_TOKEN;
const whatsAppPhone = process.env.WHATSAPP_PHONE;
var { SP } = require("./database/config");
const DB = require("./database/generalDatabase");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");
const indexRoute = require("./routes/indexRoute");

const request = require("request"),
  express = require("express"),
  body_parser = require("body-parser"),
  axios = require("axios").default,
  app = express().use(body_parser.json());

require("dotenv").config();
app.use(cors());

const server = http.createServer(app);
const io = socketIO(server, { pingTimeout: 4000, pingInterval: 2000 });
// var appS = { allSockets: [] };
//--{'pingTimeout':4000, 'pingInterval':2000}

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  // socket.on('sendMessage',(payload)=>{
  //   console.log(payload);
  //   io.emit('sendMessage',payload);
  // })
});

app.use("", indexRoute);

server.listen(process.env.PORT || 1337, () =>
  console.log("webhook is listening")
);