import React, { useState, ChangeEvent } from 'react';

function MainChatMessage() {
    const [message, setMessage] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    return(
        <div className="relative w-[381px] h-[107px] flex-shrink-1 flex"
        style={{
            backgroundColor: '#EDF1F6',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        }}>
            <textarea
                value={message}
                onChange={handleChange}
                className="absolute top-[14px] left-[28px] w-[328px] h-[45px] rounded-[15px] bg-white px-3 text-black"
                placeholder="메시지" />
        </div>
    );
}
export default MainChatMessage;