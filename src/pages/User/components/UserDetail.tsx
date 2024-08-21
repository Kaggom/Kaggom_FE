import Header from "./Header";
import Profile from "../../../assets/User/profile.webp"
import { Link } from "react-router-dom";
import UserInterest from "./UserInterest";


const UserDetail = () => {
    const interests = ['유학', '동아리', '공모전', '장학금', '봉사활동', '졸업', '휴학', '행사'];

    return (
        <div className=" w-[381px] h-[100%] bg-gradient-to-b from-white to-[#EDF1F6] flex flex-col">
            <Header header="개인정보" />
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
                <Link
                to="/user/edit"
                className="flex ml-[280px] font-pretendard font-bold text-[13px] text-[#B7B4B4] cursor-pointer hover:text-blue"
                >
                    프로필 수정
                </Link>
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
                    <p className="flex mr-[25px] font-pretendard font-medium text-[15px] text-black">
                        컴퓨터공학과
                    </p>
                </h3>
                <h3 className="flex flex-row mt-[8px] ml-[28px] font-pretendard font-medium text-[18px] text-black justify-between">
                    복수전공
                    <p className="flex mr-[25px] font-pretendard font-medium text-[15px] text-black">
                        경영학부 경영학과
                    </p>
                </h3>
                <h3 className="flex flex-row mt-[8px] ml-[28px] font-pretendard font-medium text-[18px] text-black justify-between">
                    부전공
                    <p className="flex mr-[25px] font-pretendard font-medium text-[15px] text-black">
                        국어교육과
                    </p>
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
        </div>
    );
}

export default UserDetail;