import KakaoGoogleLogin from "./components/Login";

function Login() {
    return (
        <div 
        className="flex flex-col h-screen w-full" // 전체 높이와 너비를 설정
        >
                <KakaoGoogleLogin />
            </div>
        );
}

export default Login;