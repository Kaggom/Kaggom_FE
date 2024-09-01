import { useState, FormEvent, useEffect} from 'react';
import KaggomChatMessage from './KaggomChatMessage';
import UserChatMessage from './UserChatMessage';
import SendMessage from '../../../assets/Chat/SendMessage.svg'
import axios from 'axios';

function MainChat() {

    const [formattedDate, setFormattedDate] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState<{ type: 'user' | 'bot'; text: string; url?:string }[]>([]);

    const getFormattedDate = (): string => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
        const day = String(today.getDate()).padStart(2, '0'); // 하루는 1부터 시작

        return `${year}년 ${month}월 ${day}일`;
    };

    const [isVoiceBotOn, setIsVoiceBotOn] = useState(false);

    const toggleVoiceBot = () => {
        setIsVoiceBotOn((prev) => !prev);
        if (!isVoiceBotOn) {
            // 보이스봇 켜짐 처리
            alert("보이스채팅을 시작합니다.");
            console.log("보이스봇이 켜졌습니다.");
        } else {
            // 보이스봇 꺼짐 처리
            alert("보이스채팅을 종료합니다.");
            console.log("보이스봇이 꺼졌습니다.");
        }
    };


    useEffect(() => {
        setFormattedDate(getFormattedDate());
    }, []);



    const chatStartApi = async (message:string) => {
        setIsLoading(true);

        const requestData = {
            session_id: window.SESSION_ID,
            text: message, // 전송할 데이터
            // session_id : window.SNSID,
        };

        
        console.log("requestDate : ", requestData)
        

        try {
            const response = await axios.post('https://kaggom.online/chat',requestData, {
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
        } finally {
            setIsLoading(false); // 버튼 다시 활성화
            console.log("로딩 활성화 상태 : ", isLoading)
        }
    }

    const handleSubmit = (e: FormEvent): void => {
        console.log("handlesubmit : 여기가 안되나?")
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

                <div className="flex flex-col w-full"> {/* space-y-2 사용하여 메시지 간격 설정 */}
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
                disabled = {isLoading} 
            />
            <button className={`ml-2 flex items-center ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={(e) => {
                        if (!isLoading) {
                            chatStartApi(message);
                        } else {
                            e.preventDefault(); // isLoading 상태일 때는 아무 동작도 하지 않음
                        }
                    }}
                    type="submit"
                    >
                <img src={SendMessage} alt="Send" width="27" height="27" />
            </button>
        </form>
        <div className='flex flex-row bg-[#EDF1F6] items-center'>
            <h1 className="text-[12px] font-semibold text-[#9B9B9B] font-pretendard ml-4 mb-4">보이스채팅 {isVoiceBotOn ? 'ON' : 'OFF'}</h1>
                <label className="flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        checked={isVoiceBotOn}
                        onChange={toggleVoiceBot}
                        className="hidden"
                    />
                    <div className={`w-12 h-8 flex items-center mb-4 ml-2 bg-[#B8B7B7] rounded-full p-1 transition-colors duration-300 ${isVoiceBotOn ? 'bg-white' : 'bg-[#B8B7B7]'}`}>
                        <div className={` bg-blue w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${isVoiceBotOn ? 'translate-x-5' : ''}`} />
                    </div>
                </label>
        </div>
    </>
    );
}
export default MainChat;