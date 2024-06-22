"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const Socket_1 = __importDefault(require("./services/Socket"));
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        // http service init
        const httpServer = http_1.default.createServer();
        //   socket service initialize
        const socketService = new Socket_1.default();
        const port = process.env.PORT ? process.env.PORT : 8000;
        // attached socket service
        socketService.io.attach(httpServer);
        //   listning http server
        httpServer.listen(port, () => {
            console.log("server.js is running at port : ", port);
        });
        //   initialize socket listners
        socketService.initListners();
    });
}
// initialize the server
init();
