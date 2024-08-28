import Header from "./Header";
import RecordBox from "./RecordBox";

const Dumy = [
    {userChat : "컴퓨터공학과 최신정보를 알려줘컴퓨터공학과 최신정보", kaggomChat : "컴퓨터공학과 최신정보는 이것저것이것 저것 저것저것" },
    {userChat : "컴퓨터공학과 최신정보를 알려줘컴퓨터공학과 최신정보", kaggomChat : "컴퓨터공학과 최신정보는 이것저것이것 저것 저것저것" },
    {userChat : "컴퓨터공학과 최신정보를 알려줘컴퓨터공학과 최신정보", kaggomChat : "컴퓨터공학과 최신정보는 이것저것이것 저것 저것저것" },
    {userChat : "컴퓨터공학과 최신정보를 알려줘컴퓨터공학과 최신정보", kaggomChat : "컴퓨터공학과 최신정보는 이것저것이것 저것 저것저것" }
]

const Dumy2 = [
    {userChat : "2컴퓨터공학과 최신정보를 알려줘컴퓨터공학과 최신정보", kaggomChat : "컴퓨터공학과 최신정보는 이것저것이것 저것 저것저것" },
    {userChat : "2컴퓨터공학과 최신정보를 알려줘컴퓨터공학과 최신정보", kaggomChat : "컴퓨터공학과 최신정보는 이것저것이것 저것 저것저것" },
    {userChat : "2컴퓨터공학과 최신정보를 알려줘컴퓨터공학과 최신정보", kaggomChat : "컴퓨터공학과 최신정보는 이것저것이것 저것 저것저것" },
    {userChat : "2컴퓨터공학과 최신정보를 알려줘컴퓨터공학과 최신정보", kaggomChat : "컴퓨터공학과 최신정보는 이것저것이것 저것 저것저것" }
]

const RecordDetail = () => {
    return (
        <>
        <div className="bg-gradient-to-b from-white to-[#EDF1F6] flex flex-col h-auto flex-grow overflow-y-auto w-fit">
            <Header />
            <div className="flex flex-col mr-[37px] ml-[30px] flex-grow">
                <p className="text-[#9E9A9A] text-[20px] font-pretendard font-semibold">
                    Today
                </p>
                <div className="flex flex-col space-y-4">
                    {Dumy.map((data, index) => (
                        <RecordBox
                            key={index}
                            userChat={data.userChat}
                            kaggomChat={data.kaggomChat}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-col mr-[37px] ml-[30px] mt-[35px] mb-16 flex-grow">
                <p className="text-[#9E9A9A] text-[20px] font-pretendard font-semibold">
                    Previous 7 Days
                </p>
                <div className="flex flex-col space-y-4">
                    {Dumy2.map((data, index) => (
                        <RecordBox
                            key={index}
                            userChat={data.userChat}
                            kaggomChat={data.kaggomChat}
                        />
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}

export default RecordDetail;