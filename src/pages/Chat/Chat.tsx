import MainChat from "./components/MainChat";
import MainChatMessage from "./components/MainChatMessage";
import MainHeader from "./components/MainHeader";

function Chat() {
    return (
        <div className = "relative border-white"
            style={{
                width: '450px',
                height: '724px',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid black'
            }}
        >
            <MainHeader />
            <MainChat />
            <MainChatMessage />
        </div>

        );
}

export default Chat;