import http from "http";
import SocketService from "./services/Socket";

async function init() {
  // http service init
  const httpServer = http.createServer();

  //   socket service initialize
  const socketService = new SocketService();

  const port = process.env.PORT ? process.env.PORT : 8000;

  // attached socket service
  socketService.io.attach(httpServer);

  //   listning http server
  httpServer.listen(port, () => {
    console.log("server.js is running at port : ", port);
  });

  //   initialize socket listners
  socketService.initListners();
}

// initialize the server
init();
