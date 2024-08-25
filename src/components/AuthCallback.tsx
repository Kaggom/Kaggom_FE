import { useEffect } from "react";

const AuthCallback = () => {
    useEffect(() => {
        const handleGoogleCallback = async () => {
            console.log("잘되고있나?")
            const params = new URLSearchParams(window.location.search);
            console.log(params)
            const token = params.get('token'); // 백엔드에서 반환한 토큰
            console.log(token)

            if (token) {
                // 토큰을 로컬 스토리지에 저장
                localStorage.setItem('userToken', token);
                // 로그인 상태를 업데이트하거나 리다이렉트
                window.location.href = 'http://localhost:5173/chat';
            } else {
                console.error('토큰이 없습니다.');
            }
        };

        handleGoogleCallback();
    }, []);

    return (
        <div className = "absolute flex-auto bg-white text-blue font-pretendard font-bold"
                style={{
                    width: '450px',
                    height: '100%', // 높이를 화면의 100%로 설정합니다.
                    display: 'flex', // Flexbox 레이아웃을 사용합니다.
                    flexDirection: 'column',
                    // border: '1px solid black'
                }}
            >
        <div>
            <h1>Google 인증 중...</h1>
        </div>
        </div>
    );
};

export default AuthCallback;