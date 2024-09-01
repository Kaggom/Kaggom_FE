import { useEffect } from "react";
import MainChat from "./components/MainChat";
import MainHeader from "./components/MainHeader";
import axios from 'axios';


function Chat() {

    console.log("token : ", document.cookie);
    const authApi = async () => {
        try {
            const response = await axios.post('https://kaggom.store/login',
                {},
                {
                    withCredentials: true
                }
            );
            console.log("authApi response: ", response.data);
            window.SNSID = response.data.user.snsid;
            console.log(window.SNSID);
        } catch (error) {
            console.error('API 요청 중 오류 발생:', error instanceof Error ? error.message : error);
            return null;
        }
    };


    // newChatApi 함수 정의
    const newChatApi = async () => {
        try {
            const axiosConfig = {
                headers: {
                    'Content-Type': 'application/json',
                },
                // httpsAgent: new https.Agent({
                //     rejectUnauthorized: false, // SSL 인증서 검증을 무시하도록 설정
                // }),
            };
            
            console.log("도메인 주소: ", import.meta.env);
            console.log("newChatApi에서 snsid : ", window.SNSID);

            const response = await axios.post(
                'https://kaggom.online/new_session',
                { "snsid": window.SNSID },
                axiosConfig
            );

            console.log('newChatAPI Response:', response.data);
            window.SESSION_ID = response.data.session_id
            console.log('session_id:', window.SESSION_ID);
        } catch (error) {
            console.error('API 요청 중 오류 발생:', error instanceof Error ? error.message : error);
            return null;
        }
    };

    useEffect(() => {
        const initializeChat = async () => {
            try {
                await authApi(); // authApi가 완료될 때까지 대기
                await newChatApi(); // authApi가 완료된 후에 newChatApi 호출
            } catch (error) {
                console.error('초기화 과정에서 오류 발생:', error);
            }
        };
    
        initializeChat();
    }, []);

    return (
        // <div 
        //     className="relative w-full h-full bg-white"
        //     style={{
        //         display: 'flex',
        //         alignItems: 'center',
        //         justifyContent: 'center',
        //     }}
        // >
        <div 
        className="flex flex-col h-screen w-full" // 전체 높이와 너비를 설정
    >
                <MainHeader />
                <MainChat />
            </div>
        // </div>

        );
}

export default Chat;