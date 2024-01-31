import React, { useState } from 'react'
import io from "socket.io-client";
import Chat from './components/Chat';
const socket = io.connect("http://localhost:3003");

const Contact = () => {

const [username, setUsername] = useState("");
const [room, setRoom] = useState("");
const [ShowChats, setShowChats] = useState(false);

const joinroom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChats(true)
    }
  };

    
return (
    <div>
        <Chat socket={socket} username={username} />
    </div>
  )
}

export default Contact;