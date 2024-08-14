import React, { useState, FormEvent, useEffect} from 'react';
import KaggomChatMessage from './KaggomChatMessage';
import UserChatMessage from './UserChatMessage';
import SendMessage from '../../../assets/Chat/SendMessage.svg'

function MainChat() {

    const [formattedDate, setFormattedDate] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [messages, setMessages] = useState<string[]>([]);

    const getFormattedDate = (): string => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
        const day = String(today.getDate()).padStart(2, '0'); // 하루는 1부터 시작

        return `${year}년 ${month}월 ${day}일`;
    };

    useEffect(() => {
        setFormattedDate(getFormattedDate());
    }, []);


    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();
        if (message.trim()) {
            setMessages([...messages, message]);
            setMessage('');
        }
    };


    return(
        <>
        <div className="relative w-[381px] h-[521px] flex-shrink-1 flex-1 overflow-y-auto bg-white">
            <div className="relative w-[381px] flex-shrink-1 flex flex-col items-center justify-center">
                    <p className="top-[21px] font-semibold text-center"
                        style={{
                            fontFamily: 'Pretendard',
                            fontSize: '12px',
                            fontWeight: 700,
                            color: '#A7ADAD',
                        }}>
                        {formattedDate}
                    </p>
                <KaggomChatMessage />
                {messages.map((msg, index) => (
                    <UserChatMessage key={index} chat={msg} />
                ))}
            </div>
        </div>

        <form onSubmit={handleSubmit} className="relative w-[381px] h-[107px] flex-shrink-1 flex bg-[#EDF1F6]">
            <textarea
                className="absolute top-[14px] left-[28px] w-[328px] h-[45px] rounded-[15px] bg-white px-3 flex resize-none text-black"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="메시지를 입력하세요"
            />
            <button type="submit" className="absolute top-[23px] right-[37px]">
                <img src={SendMessage} alt="Send" width="27" height="27" />
            </button>
        </form>
        </>
    );
}
export default MainChat;