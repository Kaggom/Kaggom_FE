import KaggomLogo from "../../../assets/KaggomLogo.svg"
import KakaoLoginImage from "../../../assets/Login&Onboard/kakao_login.png"
import GoogleLoginImage from "../../../assets/Login&Onboard/google_login.png"

function KakaoGoogleLogin() {
    return (
        <>
        <div className="relative w-full h-screen bg-[#5F88FE]">
            <img src={KaggomLogo} alt="첫페이지" className="absolute top-[244px] left-1/2 transform -translate-x-1/2 flex items-center" />
            <button className="absolute top-[430px] left-1/2 transform -translate-x-1/2 flex items-center">
                <img src={KakaoLoginImage} alt="카카오로그인" /> 
            </button>
            <button className="absolute top-[500px] left-1/2 transform -translate-x-1/2 flex items-center">
                <img src={GoogleLoginImage} alt="구글로그인" /> 
            </button>
        </div>
        </>
    );
}

export default KakaoGoogleLogin;