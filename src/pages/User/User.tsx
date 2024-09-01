
import axios from "axios";
import UserDetail from "./components/UserDetail";
import { useEffect } from "react";

function User() {
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
            window.NAME = response.data.user.nick;
            window.EMAIL = response.data.user.email;

            console.log(window.SNSID);
            console.log(window.NAME);
            console.log(window.EMAIL);
        } catch (error) {
            console.error('API 요청 중 오류 발생:', error instanceof Error ? error.message : error);
            return null;
        }
    };

    useEffect(() => {
        const initializeChat = async () => {
            try {
                await authApi(); // authApi가 완료될 때까지 대기
            } catch (error) {
                console.error('초기화 과정에서 오류 발생:', error);
            }
        };
    
        initializeChat();
    }, []);
    
    return (
        <div 
        className="flex flex-row" // 전체 높이와 너비를 설정
    >
                < UserDetail />
            </div>
        );
}

export default User;