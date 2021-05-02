import io from "socket.io-client";

const socket = io(window.location.origin);

socket.on("message", (message) => {
  console.log(message);
});

export default socket;
