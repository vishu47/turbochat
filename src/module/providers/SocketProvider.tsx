"use client";

import React, { ReactNode, createContext, useCallback, useEffect } from "react";
import { io } from "socket.io-client";

interface SocketProvidersProps {
  children: ReactNode;
}

interface ISocketContext {
  sendMessage: (msg: string) => any;
}

const SocketContext = createContext<ISocketContext | null>(null);

export const SocketProviders: React.FC<SocketProvidersProps> = ({
  children,
}) => {
  const sendMessage: ISocketContext["sendMessage"] = useCallback((msg) => {
    console.log("send message", msg);
  }, []);

  useEffect(() => {
    console.log("lllllllllllllllllllll");
    const _socket = io(`http://localhost:8000`);
    console.log(_socket,'_socket')
    return () => {
      _socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ sendMessage }}>
      {children}
    </SocketContext.Provider>
  );
};
