import KaggomProfile from "../../../assets/Kaggom.svg"

interface Props {
    userChat : string;
    kaggomChat : string;
}

const RecordBox = ({userChat, kaggomChat}: Props) => {
    return (
        <div className="flex flex-row h-[71px] rounded-[10px] bg-[#EDF1F6] border-[#E4E1E1] justify-between items-center"
            style={{
                boxShadow: `0px 2px 5px 0px rgba(0, 0, 0, 0.25)`,
            }}
        >
            <img src = {KaggomProfile} alt = "캐곰 프로필"
                className="flex ml-[17px] w-[34px] h-[34px]" />
            <div className="flex flex-col flex-grow mr-[22px] ml-[26px] max-w-full">
                <p className="font-semibold font-pretendard text-[#A09D9D] text-[12px] max-w-[193px] whitespace-nowrap overflow-hidden text-ellipsis">
                    {userChat}
                </p>
                <div className="flex flex-grow mr-[22px] rounded-[10px] border-[#E4E1E1] justify-center items-center bg-white h-[33px] min-w-0 max-w-full">
                    <p className="font-semibold font-pretendard text-black text-[12px] mr-[8px] ml-[8px] whitespace-nowrap overflow-hidden text-ellipsis">
                        {kaggomChat}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RecordBox;

// 컴퓨터공학과 최신정보를 알려줘컴퓨터공학과 최신정보를 알려줘컴퓨터공학과 최신정보를 알려줘
// 컴퓨터공학과 최신정보는 이것저것이것 저것 저것저것