require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { spawn } = require("child_process");
const http = require("http");
const { Server } = require("socket.io");

const User = require("./src/models/userModels");


const authRouter = require("./src/routes/userRoutes");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: true });
const PORT = process.env.PORT;
const RTMP = process.env.RTMP;

const ffmpegPath = "C:\\ffmpeg\\ffmpeg.exe";

const options = [
  "-i",
  "-",
  "-c:v",
  "libx264",
  "-preset",
  "ultrafast",
  "-tune",
  "zerolatency",
  "-r",
  `${25}`,
  "-g",
  `${25 * 2}`,
  "-keyint_min",
  25,
  "-crf",
  "25",
  "-pix_fmt",
  "yuv420p",
  "-sc_threshold",
  "0",
  "-profile:v",
  "main",
  "-level",
  "3.1",
  "-c:a",
  "aac",
  "-b:a",
  "128k",
  "-ar",
  128000 / 4,
  "-f",
  "flv",
  `rtmp://a.rtmp.youtube.com/live2/${RTMP}`,
];

const ffmpegProcess = spawn(ffmpegPath, options);

ffmpegProcess.stdout.on("data", (data) => {
  console.log(`FFmpeg stdout: ${data}`);
});
ffmpegProcess.stderr.on("data", (data) => {
  console.error(`FFmpeg stderr: ${data}`);
});
ffmpegProcess.on("close", (code) => {
  console.log(`FFmpeg child process exited with code ${code}`);
});

app.use(cors());
app.use(express.json());

app.use("/", authRouter);

const emailToSocketIdMap = new Map();
const socketidToEmailMap = new Map();

io.on("connection", (socket) => {
  console.log(`Socket Connected`);
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
    io.to(to).emit("peer:nego:needed", { from: socket.id, offer });
  });

  socket.on("peer:nego:done", ({ to, ans }) => {
    io.to(to).emit("peer:nego:final", { from: socket.id, ans });
  });

  socket.on("stream:incoming", (chunks) => {
    ffmpegProcess.stdin.write(chunks, (err) => {
      console.log(err);
    });
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
