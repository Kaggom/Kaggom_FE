import { useState } from "react";
import ChatClick from "../assets/SideBar/SideBarChat_Click.svg"
import Chat from "../assets/SideBar/SideBarChat.svg"
import RecordClick from "../assets/SideBar/SideBarRecord_Click.svg"
import Record from "../assets/SideBar/SideBarRecord.svg"
import UserClick from "../assets/SideBar/SideBarUser_Click.svg"
import User from "../assets/SideBar/SideBarUser.svg"
import { useNavigate } from 'react-router-dom';

function SideBar() {
    const [chat, setChat] = useState<boolean>(true);
    const [record, setRecord] = useState<boolean>(false);
    const [user, setUser] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleChange = (target: 'chat' | 'record' | 'user') => {
        setChat(target === 'chat');
        setRecord(target === 'record');
        setUser(target === 'user');
        if (target === 'chat') {
            navigate('/chat');
        } else if (target === 'record') {
            navigate('/record');
        } else if (target === 'user') {
            navigate('/user');
        }
    };

    // () => 함수(인자)로 써야 인자를 지정가능함
    return (
        <div className="relative w-[72px] top-0 right-0 h-full bg-white shadow-lg flex">
            <nav className="absolute right-[22px] top-[54px] flex flex-col items-center space-y-[20px] mt-4 justify-center">
                <button onClick={() =>handleChange('chat')}>
                        <img
                            src={chat ? ChatClick: Chat}
                            alt="chat router"
                        />
                    </button>
                    <button onClick={() => handleChange('record')}>
                    <img
                        src={record ? RecordClick : Record}
                        alt="record router"
                    />
                </button>
                <button onClick={() => handleChange('user')}>
                    <img
                        src={user ? UserClick : User}
                        alt="user router"
                    />
                </button>
            </nav>

        </div>
    );
}

export default SideBar;