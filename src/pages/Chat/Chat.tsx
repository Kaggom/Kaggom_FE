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