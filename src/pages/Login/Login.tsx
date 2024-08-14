import KakaoGoogleLogin from "./components/Login";

function Login() {
    return (
            <div className = "absolute"
                style={{
                    width: '450px',
                    height: '100%', // 높이를 화면의 100%로 설정합니다.
                    display: 'flex', // Flexbox 레이아웃을 사용합니다.
                    flexDirection: 'column',
                    // border: '1px solid black'
                }}
            >
                <KakaoGoogleLogin />
            </div>
        );
}

export default Login;