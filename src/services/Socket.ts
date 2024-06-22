import { Server } from "socket.io";

class SocketService {
  private _io: Server;
  constructor() {
    console.log("init socket server...");
    this._io = new Server({
      cors: {
        allowedHeaders: "*",
        origin: "*",
      },
    });
  }

  public initListners() {
    console.log("init socket listners");
    const io = this._io;
    io.on("connect", (socket) => {
      console.log("New Socket connection : ", socket.id);

      socket.on("event:mesage", async ({ message }: { message: String }) => {
        console.log("New message Rec: ", message);
      });
    });
  }

  get io() {
    return this._io;
  }
}
export default SocketService;
