import React from 'react';
import './ChatPage.css';
import Home from "./pages/Home.ts;
import { BrowserRouter, Routes, Route } from "react-router-dom";

const ChatPage: React.FC = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
        );
    }

export default ChatPage;
