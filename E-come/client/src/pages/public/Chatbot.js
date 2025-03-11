import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "../../styles/Chatbox.scss";
import { Button } from "../../components";

const socket = io("http://localhost:3000");

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        socket.on("connect", () => {
            console.log("Connected to server");
        });

        socket.on("newMessage", (newMessage) => {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        });

        socket.on("disconnect", () => {
            console.log("Disconnected from server");
        });

        return () => {
            socket.off("newMessage");
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        socket.emit("createMessage", {
            from: "User",
            text: message,
            createdAt: Date.now(),
        });
        setMessage("");
    };

    return (
        <div className="chatbot_container">
            <ul className="chat_messages">
                {messages.map((msg, index) => (
                    <li key={index} className={msg.from === "Chatbot" ? "chatbot" : "user"}>
                        <strong>{msg.from}:</strong> {msg.text}
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit} className="chat_form">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Nhập tin nhắn..."
                    autoComplete="off"
                />
                <Button children='send' type="submit"></Button>
            </form>

        </div>
    );
};

export default Chatbot;
