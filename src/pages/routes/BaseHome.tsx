import openChat from '../../components/openChat'
import ChatIcon from '../icon.png'
import '../../App.css'

const BaseHome: React.FC = () => {
    return (
    <div className="App">
        <div className="chat-button" onClick={openChat}>
            <img src={ChatIcon} alt="Chat Icon" />
        </div>
    </div>
    );
};

export default BaseHome;