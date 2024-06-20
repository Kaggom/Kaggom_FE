import openChat from "../pages/openChat";
import ChatIcon from '../pages/chatbot_image.png';
import '../App.css';

const BaseHome: React.FC = () => {
    return (
    <div className="App">
        <div className="chat-button" onClick={openChat}>
            <img src={ChatIcon} alt="Chat Icon" />
        </div>
        <h1>Home Page</h1>
    </div>
    );
};

export default BaseHome;