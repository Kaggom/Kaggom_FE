import MainChat from "./components/MainChat";
import MainHeader from "./components/MainHeader";

function Chat() {
    return (
        // <div 
        //     className="relative w-full h-full bg-white"
        //     style={{
        //         display: 'flex',
        //         alignItems: 'center',
        //         justifyContent: 'center',
        //     }}
        // >
            <div className = "absolute flex-auto"
                style={{
                    width: '381px',
                    height: '100%', // 높이를 화면의 100%로 설정합니다.
                    display: 'flex', // Flexbox 레이아웃을 사용합니다.
                    flexDirection: 'column',
                    // border: '1px solid black'
                }}
            >
                <MainHeader />
                <MainChat />
            </div>
        // </div>

        );
}

export default Chat;