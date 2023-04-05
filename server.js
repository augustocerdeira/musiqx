require("dotenv").config();

const express = require("express"),
    cookieParser = require("cookie-parser"),
    cors = require("cors");
const DB_PORT = 8000;
require("./server/config/mongoose.config");

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(express.static("images"))

require("./server/routes/user.routes")(app);

// app.listen(DB_PORT, () =>
//     console.log(`Listening on port ${DB_PORT}`)
// );

const server = app.listen(8000, () => console.log("The server is all fired up on port 8000"));
const io = require('socket.io')(server, { cors: true });

io.on("connection", socket => {
    console.log(socket.id)
    console.log("Hows YOU Doin.(shake hand)");
    socket.on("textmsg", data => {
        console.log("got it " + data)
        io.emit("next text", data);
        // for messages only from other party use this
        // socket.broadcast.emit("next text", data);
    });
});