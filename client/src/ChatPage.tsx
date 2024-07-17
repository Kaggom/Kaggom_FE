import React from 'react';
import './ChatPage.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const ChatPage: React.FC = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth/kakao" element={<Auth />} />
                    <Route path="/users" element={<Profile />} />
                    <Route path="/users/list" element={<List />} />
                </Routes>
            </BrowserRouter>
        </div>
        );
    }

export default ChatPage;
