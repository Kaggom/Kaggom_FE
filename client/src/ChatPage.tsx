import React from 'react';
import './ChatPage.css';

const ChatPage: React.FC = () => {
    return (
        <div className="chat-container">
            <header className="chat-header">
                <h1>KAGGOM CHAT</h1>
                <p>2024년 5월 10일 금요일</p>
            </header>
            <main className="chat-main">
                <div className="chat-message">
                    <div className="chat-bubble bot">안녕하세요 캐곰 챗 입니다. 오늘은 무엇을 도와드릴까요?</div>
                    <div className="chat-bubble user">나한테 맞는 공모전을 추천해줘</div>
                    <div className="chat-bubble bot">
                        <strong>김홍익</strong> 님께 맞는 공모전을 추천해드릴게요! 이런 공모전은 어떨까요?
                        <div className="chat-cards">
                            <div className="chat-card">Google Code-in</div>
                            <div className="chat-card">Microsoft imagine Cup</div>
                            <div className="chat-card">Google Code-in</div>
                        </div>
                    </div>
                    <div className="chat-bubble user">컴퓨터공학과 3학년 전공필수 과목을 알려줘</div>
                </div>
            </main>
            <footer className="chat-footer">
                <input type="text" placeholder="메시지를 입력하세요..." />
            </footer>
        </div>
    );
};

export default ChatPage;
