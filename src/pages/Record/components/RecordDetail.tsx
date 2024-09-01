import { useEffect, useState} from "react";
import Header from "./Header";
import RecordBox from "./RecordBox";
import axios from "axios";

// const Dumy = [
//     {userChat : "컴퓨터공학과 최신정보를 알려줘컴퓨터공학과 최신정보컴퓨터공학과 최신정보를 알려줘컴퓨터공학과 최신정보", kaggomChat : "컴퓨터공학과 최신정보는 이것저것이것 저것 저것저것컴퓨터공학과 최신정보는 이것저것이것 저것 저것저것" },
//     {userChat : "컴퓨터공학과 최신정보를 알려줘컴퓨터공학과 최신정보", kaggomChat : "컴퓨터공학과 최신정보는 이것저것이것 저것 저것저것" },
//     {userChat : "컴퓨터공학과 최신정보를 알려줘컴퓨터공학과 최신정보", kaggomChat : "컴퓨터공학과 최신정보는 이것저것이것 저것 저것저것" },
//     {userChat : "컴퓨터공학과 최신정보를 알려줘컴퓨터공학과 최신정보", kaggomChat : "컴퓨터공학과 최신정보는 이것저것이것 저것 저것저것" }
// ]

// const Dumy2 = [
//     {userChat : "2컴퓨터공학과 최신정보를 알려줘컴퓨터공학과 최신정보", kaggomChat : "컴퓨터공학과 최신정보는 이것저것이것 저것 저것저것" },
//     {userChat : "2컴퓨터공학과 최신정보를 알려줘컴퓨터공학과 최신정보", kaggomChat : "컴퓨터공학과 최신정보는 이것저것이것 저것 저것저것" },
//     {userChat : "2컴퓨터공학과 최신정보를 알려줘컴퓨터공학과 최신정보", kaggomChat : "컴퓨터공학과 최신정보는 이것저것이것 저것 저것저것" },
//     {userChat : "2컴퓨터공학과 최신정보를 알려줘컴퓨터공학과 최신정보", kaggomChat : "컴퓨터공학과 최신정보는 이것저것이것 저것 저것저것" }
// ]

interface SessionData {
    id: string;
    created_at: string;
    interests: string[];
    chat_history: Array<{ user_message: string; bot_response: string }>;
}

const RecordDetail = () => {
    const [todayRecordChat, setTodayRecordChat] = useState<Array<{ user_message: string, bot_response: string }>>([]);
    const [RecordChat, setRecordChat] = useState<Array<{ user_message: string, bot_response: string }>>([]);

    const isToday = (timestamp: string): boolean => {
        const today = new Date();
        const dateToCheck = new Date(timestamp);

        return (
            today.getFullYear() === dateToCheck.getFullYear() &&
            today.getMonth() === dateToCheck.getMonth() &&
            today.getDate() === dateToCheck.getDate()
        );
    };
    
    const RecordListApi = async () => {
        try {
            const response = await axios.get(`https://kaggom.online/sessions/${window.SNSID}`,
                {});
            console.log("RecordListApi response: ", response.data);
            const todayChats: Array<{ user_message: string, bot_response: string }> = [];
            const otherChats: Array<{ user_message: string, bot_response: string }> = [];

            response.data.sessions.forEach((data: SessionData) => {
                if (isToday(data.created_at)) {
                    todayChats.push(...data.chat_history);
                } else {
                    otherChats.push(...data.chat_history);
                }
            });

            setTodayRecordChat(todayChats);
            setRecordChat(otherChats);
        }catch (error) {
            console.error('API 요청 중 오류 발생:', error instanceof Error ? error.message : error);
            return null;
        }
    };

    useEffect( () => {
        RecordListApi();
    }, [])

    return (
        <>
        <div className="bg-gradient-to-b from-white to-[#EDF1F6] flex flex-col w-full h-screen overflow-y-auto">
            <Header />
            <div className="flex flex-col mr-[34px] ml-[33px]">
                <p className="text-[#9E9A9A] text-[20px] font-pretendard font-semibold">
                    Today
                </p>
                <div className="flex flex-col space-y-4">
                    {todayRecordChat.map((data, index) => (
                        <RecordBox
                            key={index}
                            userChat={data.user_message}
                            kaggomChat={data.bot_response}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-col mr-[37px] ml-[30px] mt-[35px] mb-16">
                <p className="text-[#9E9A9A] text-[20px] font-pretendard font-semibold">
                    Previous 7 Days
                </p>
                <div className="flex flex-col space-y-4">
                    {RecordChat.map((data, index) => (
                        <RecordBox
                            key={index}
                            userChat={data.user_message}
                            kaggomChat={data.bot_response}
                        />
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}

export default RecordDetail;