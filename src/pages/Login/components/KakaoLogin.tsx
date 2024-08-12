import KaggomLogo from "../../../assets/KaggomLogo.svg"
import KakaoLoginImage from "../../../assets/kakao_login.png"

function KakaoLogin() {
    return (
        <>
        <div className="relative w-full h-screen bg-[#5F88FE]">
            <img src={KaggomLogo} alt="첫페이지" className="absolute top-[244px] left-1/2 transform -translate-x-1/2 flex items-center" />
            <button className="absolute top-[464px] left-1/2 transform -translate-x-1/2 flex items-center">
                <img src={KakaoLoginImage} alt="카카오로그인" /> 
            </button>
        </div>
        </>
    );
}

export default KakaoLogin;