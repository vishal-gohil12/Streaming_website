require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const User = require("./src/models/userModels");

const videoRoutes = require("./src/routes/videoRoutes");
const authRouter = require("./src/routes/userRoutes");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: true });
const PORT = process.env.PORT;

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/", videoRoutes);
app.use("/", authRouter);

const emailToSocketIdMap = new Map();
const socketidToEmailMap = new Map();

io.on("connection", (socket) => {
  console.log(`Socket Connected`, socket.id);
  socket.on("room:join", (data) => {
    const { email, room } = data;
    emailToSocketIdMap.set(email, socket.id);
    socketidToEmailMap.set(socket.id, email);
    io.to(room).emit("user:joined", { email, id: socket.id });
    socket.join(room);
    io.to(socket.id).emit("room:join", data);
  });

  socket.on("user:call", ({ to, offer }) => {
    io.to(to).emit("incomming:call", { from: socket.id, offer });
  });

  socket.on("call:accepted", ({ to, ans }) => {
    io.to(to).emit("call:accepted", { from: socket.id, ans });
  });

  socket.on("peer:nego:needed", ({ to, offer }) => {
    console.log("peer:nego:needed", offer);
    io.to(to).emit("peer:nego:needed", { from: socket.id, offer });
  });

  socket.on("peer:nego:done", ({ to, ans }) => {
    console.log("peer:nego:done", ans);
    io.to(to).emit("peer:nego:final", { from: socket.id, ans });
  });
});
const startServer = (port) => {
  server.listen(port, (err) => {
    if (err) {
      if (err.code === "EADDRINUSE") {
        console.log(`Port ${port} is already in use. Trying the next one.`);
        startServer(port + 1);
      } else {
        console.error("Error starting server:", err);
      }
    } else {
      console.log(`Server is listening on port ${port}`);
    }
  });
};

startServer(PORT);
