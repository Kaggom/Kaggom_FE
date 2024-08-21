import Header from "./Header";
import Profile from "../../../assets/User/profile.webp"
import { Link } from "react-router-dom";
import UserInterest from "./UserInterest";
import { useState } from "react";


const UserDetail = () => {
    const interests = ['유학', '동아리', '공모전', '장학금', '봉사활동', '졸업', '휴학', '행사'];
    const [major, setMajor] = useState<string>('컴퓨터공학과');
    const [doubleMajor, setdoubleMajor] = useState<string>('경영학부 경영학과');
    const [minor, setMinor] = useState<string>('국어교육과');
    const [interest, setInterest] = useState<string[]>([]);

    return (
        <div className=" w-[381px] h-[100%] bg-gradient-to-b from-white to-[#EDF1F6] flex flex-col">
            <Header header="개인정보 수정" />
            <div className="flex flex-col justify-center items-center">
                <img src = {Profile} alt="프로필" className="mt-[27px] flex w-[118px] h-[118px]" />
                <span className="flex mt-[9px] font-pretendard font-bold text-[20px] text-black">
                    김홍익
                </span>
                <span className="flex font-pretendard font-normal text-[12px] text-black">
                    홍익대 서울캠
                </span>
                <span className="flex font-pretendard font-normal text-[12px] text-black">
                    3학년
                </span>
                <hr className="flex mt-[2px] w-[352px] border-[1.3px] bg-[#E4E1E1]" />
            </div>

            <div className="flex flex-col">
                <h2 className="flex mt-[6px] ml-[28px] font-pretendard font-bold text-[20px] text-black">
                    계정
                </h2>                    
                <h3 className="flex flex-row mt-[15px] ml-[28px] font-pretendard font-medium text-[18px] text-black">
                    이메일
                    <p className="flex ml-[130px] font-pretendard font-medium text-[15px] text-black">
                        hongiklee@gmail.com
                    </p>
                </h3>
                <hr className="flex ml-[15px] mt-[23px] w-[352px] border-[1.3px] bg-[#E4E1E1]" />
            </div>

            <div className="flex flex-col">
                <h2 className="flex mt-[6px] ml-[28px] font-pretendard font-bold text-[20px] text-black">
                    전공
                </h2>                    
                <h3 className="flex flex-row mt-[15px] ml-[28px] font-pretendard font-medium text-[18px] text-black justify-between">
                    주전공
                    <div className="flex items-center justify-center mr-[22px] w-[126px] h-[28px] rounded-[10px] bg-[#E4E1E1]">
                        <input
                        className="flex h-[18px] w-[100px] font-pretendard font-medium text-[15px] text-black bg-transparent"
                        value={major}
                        onChange={(e) => setMajor(e.target.value)}
                        />
                    </div>

                </h3>
                <h3 className="flex flex-row mt-[8px] ml-[28px] font-pretendard font-medium text-[18px] text-black justify-between">
                    복수전공
                    <div className="flex items-center justify-center mr-[22px] w-[126px] h-[28px] rounded-[10px] bg-[#E4E1E1]">
                        <input
                        className="flex h-[18px] w-[100px] font-pretendard font-medium text-[15px] text-black bg-transparent"
                        value={doubleMajor}
                        onChange={(e) => setdoubleMajor(e.target.value)}
                        />
                    </div>
                </h3>
                <h3 className="flex flex-row mt-[8px] ml-[28px] font-pretendard font-medium text-[18px] text-black justify-between">
                    부전공
                    <div className="flex items-center justify-center mr-[22px] w-[126px] h-[28px] rounded-[10px] bg-[#E4E1E1]">
                        <input
                        className="flex h-[18px] w-[100px] font-pretendard font-medium text-[15px] text-black bg-transparent"
                        value={minor}
                        onChange={(e) => setMinor(e.target.value)}
                        />
                    </div>
                </h3>
                <hr className="flex ml-[15px] mt-[23px] w-[352px] border-[1.3px] bg-[#E4E1E1]" />
            </div>
            
            <div className="flex flex-col">
                <h2 className="flex mt-[6px] ml-[28px] font-pretendard font-bold text-[20px] text-black">
                    관심키워드
                </h2>                    
                <div className="flex mt-[8px] flex-wrap mr-[28px] ml-[28px] gap-[10px]">
                    {interests.map((data, index) => (
                        <UserInterest
                            key={index}
                            interest={data}
                        />
                    ))}
                </div>
            </div>

            <button
                className="flex mt-[30px] ml-[259px] w-[97px] h-[30px] rounded-[20px] bg-[#BCBCBC] justify-center items-center cursor-pointer hover:bg-[#D7E1F9]"
                style={{
                    boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)',
                }}>
                    <p className="font-bold text-[18px] font-pretendard text-gray cursor-pointer hover:text-blue">
                        수정 완료
                    </p>
            </button>
        </div>
    );
}

export default UserDetail;