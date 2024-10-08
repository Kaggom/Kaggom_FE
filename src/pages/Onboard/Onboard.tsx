import axios from "axios";
import UserSetting from "./components/UserSetting";
import { useEffect } from "react";
import { useAuthStore } from "../../useLogin";
import { useNavigate } from "react-router-dom";
function Onboard() {

    const {login} = useAuthStore();
    const navigate = useNavigate();
    
    //원래는 Onboard.tsx에서 실행되어야 하는데 상태관리를 잘 몰라서..
    const authApi = async () => {
        try {
            const response = await axios.post('https://kaggom.store/login',
                {},
                {
                    withCredentials: true
                }
            );
            console.log("authApi response: ", response.data);


            // logined가 false이거나 존재하지 않을 때 리다이렉트
            if (response.data.isLogined || response.data.isLogined === null ) {
                login();
            } else {
                alert("로그인부터 해주세요");
                navigate('/');
            }

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
        className="flex flex-col h-screen w-full" // 전체 높이와 너비를 설정
    >
                < UserSetting />
            </div>
        );
}

export default Onboard;