import { useState, FormEvent, useEffect} from 'react';
import KaggomChatMessage from './KaggomChatMessage';
import UserChatMessage from './UserChatMessage';
import SendMessage from '../../../assets/Chat/SendMessage.svg'
import axios from 'axios';

function MainChat() {

    const [formattedDate, setFormattedDate] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [messages, setMessages] = useState<{ type: 'user' | 'bot'; text: string; url?:string }[]>([]);

    const getFormattedDate = (): string => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
        const day = String(today.getDate()).padStart(2, '0'); // 하루는 1부터 시작

        return `${year}년 ${month}월 ${day}일`;
    };

    useEffect(() => {
        setFormattedDate(getFormattedDate());
        authApi;
    }, []);

    const authApi = async () => {
        try {
            const response = await axios.post('https://fnddz5n9-3000.asse.devtunnels.ms/login',);
            console.log("authApi response: ", response.data);
            localStorage.setItem('user', JSON.stringify(response.data));
        } catch (error) {
            console.error('API 요청 중 오류 발생:', error instanceof Error ? error.message : error);
            return null;
        }
    };



    const chatStartApi = async (message:string) => {
        const requestData = {
            text: message, // 전송할 데이터
        };

        
        console.log(requestData)
        

        try {
            const response = await axios.post('/api/search',requestData, {
            headers: {
                'Content-Type': 'application/json', // JSON 형식으로 보내는 것을 명시
                // 필요한 경우 추가적인 헤더 설정
            },
        });

            console.log("chatStartApi response: ", response.data);
            console.log(response.data.url)
            handleChatMessage({ type: 'bot', text: response.data.response, url: response.data.url});
            return;
        } catch (error) {
            if (error instanceof Error) {
                console.error('에러 메시지:', error.message);
            } else {
                console.error('알 수 없는 에러 발생:', error);
            }
            console.error("API 요청 중 오류 발생:", error);
            return null; // 에러 발생 시 null 반환
        }
    }

    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();
        if (message.trim()) {
            handleChatMessage({ type: 'user', text: message }); 
            setMessage(''); // 입력창 비우기
        }
    };

    const handleChatMessage = (message:{ type: "bot" | "user"; text: string; url?:string }) => {
        setMessages((prevState) => {
            return [...prevState, message];
        });
    }
    console.log("messages: ", messages)
    return(
        <>
        <div className="relative flex-row w-[100%] h-screen flex-shrink-1 flex-1 overflow-y-auto bg-white">
                <p className="top-[21px] font-semibold text-center mb-2"
                    style={{
                        fontFamily: 'Pretendard',
                        fontSize: '15px',
                        fontWeight: 700,
                        color: '#A7ADAD',
                    }}>
                    {formattedDate}
                </p>

                <div className="flex flex-col w-full space-y-2"> {/* space-y-2 사용하여 메시지 간격 설정 */}
                    <KaggomChatMessage chat="안녕하세요 학사정보챗봇 KAGGOM 입니다!" />
                    {messages.map((msg, index) => (
                        msg.type === 'user' ? 
                            <UserChatMessage key={index} chat={msg.text} /> :
                            <KaggomChatMessage key={index} chat={msg.text} url={msg.url}/>
                    ))}
                </div>
        </div>


        <form onSubmit={handleSubmit} className="relative flex w-full h-auto p-4 bg-[#EDF1F6]">
            <textarea
                className="flex-grow w-full h-[45px] rounded-[15px] bg-white p-3 resize-none text-black"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="메시지를 입력하세요"
            />
            <button onClick={() => chatStartApi(message)}
                    type="submit" className="ml-2 flex items-center">
                <img src={SendMessage} alt="Send" width="27" height="27" />
            </button>
        </form>
        </>
    );
}
export default MainChat;