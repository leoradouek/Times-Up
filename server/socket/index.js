module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log(`Connected to ${socket.id}`);

    // welcome current user
    socket.emit("message", "Welcome to Times Up!");

    // broadcast when a user connects
    socket.broadcast.emit("message", "A user has joined the game");

    // runs when client disconnects
    socket.on("disconnect", () => {
      // let everyone else know
      io.emit("message", "A user has left the game");
    });

    // Listen for play
    socket.on("onPlay", (msg) => {
      console.log(msg);
    });
  });
};
