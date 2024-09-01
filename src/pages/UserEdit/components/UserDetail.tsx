import Profile from "../../../assets/User/profile.webp"
// import { Link } from "react-router-dom";
import UserInterest from "./UserInterest";
import { useEffect, useState } from "react";
import Plus from "../../../assets/User/plus.svg";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import axios from "axios";


const UserDetail = () => {
    // const interests = ['유학', '동아리', '공모전'];
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [year, setYear] = useState<string>('');
    
    const [major, setMajor] = useState<string>('');
    const [doubleMajor, setDoubleMajor] = useState<string>('산업데이터공학과');
    const [minor, setMinor] = useState<string>('국어교육과');
    const [interest, setInterest] = useState<string[]>([]);
    const [onToggle, setOnToggle] = useState<boolean>(false);
    const [newInterest, setNewInterest] = useState<string>('');
    const navigate = useNavigate();

    const saveInterest = () => {
        if (newInterest.trim() !== '') {
            setInterest([...interest, newInterest]);
            setNewInterest(''); // Clear the input field
        }
        else {
            setOnToggle(false)
        }
    };

    const userEditApi = async () => {
        try {
            const snsid = window.SNSID
            console.log("snsid : ", window.SNSID)
            const response = await axios.get(`https://kaggom.online/user/${snsid}`,
                {},
            );
            console.log("userApi response: ", response.data);

            setName(response.data.name);
            setEmail(response.data.email);
            setMajor(response.data.department);
            setYear(response.data.year);
            setInterest(response.data.keywords);
        } catch (error) {
            console.error('API 요청 중 오류 발생:', error instanceof Error ? error.message : error);
            return null;
        }
    };

    const userEditSendApi = async () => {
        try {
            const snsid = window.SNSID
            console.log("snsid : ", window.SNSID)
            const response = await axios.patch(`https://kaggom.online/user/${snsid}`,
                {
                    "name": window.NAME,
                    "email": window.EMAIL,
                    "department": major,
                    "year": year,
                    "keywords": interest
                },
                {}
            );
            console.log("userApi response: ", response.data);

            setMajor(response.data.department);
            setInterest(response.data.keywords);
        } catch (error) {
            console.error('API 요청 중 오류 발생:', error instanceof Error ? error.message : error);
            return null;
        }
    };

    useEffect(() => {
        userEditApi();
    }, []);



    const handleToggle = () => {
        if (onToggle == true){
            saveInterest()
        }
        else{
            setOnToggle(false)
        }

        setOnToggle(!ontoggle)
        
    }

    const handleNavUser = () => {
        userEditSendApi();
        navigate('/user');
    }

    const cancelInterest = (interestValue:string) => {
        const updatedInterests = interest.filter((interest) => interest !== interestValue);
        setInterest(updatedInterests);
    }
    return (
        <div className="w-full h-screen bg-gradient-to-b from-white to-[#EDF1F6] flex flex-col overflow-y-auto">
            <Header header="개인정보 수정" />
            <div className="flex flex-col justify-center items-center px-4">
                <img src={Profile} alt="프로필" className="mt-7 w-[70px] h-[70px]" />
                <span className="mt-2 font-pretendard font-bold text-base text-black">
                    {name}
                </span>
                <span className="font-pretendard font-normal text-sm text-black">
                    홍익대 서울캠 {year}
                </span>
                <hr className="mt-1 w-full  border border-[#E4E1E1]" />
            </div>

            <div className="flex flex-col mt-4 px-4">
                <h2 className="font-pretendard font-bold text-lg text-black">
                    계정
                </h2>                    
                <h3 className="flex justify-between flex-row mt-4 font-pretendard font-medium text-base text-black">
                    이메일
                    <p className="text-sm">
                        {email}
                    </p>
                </h3>
                <hr className="mt-5 w-full  border border-[#E4E1E1] " />
            </div>

            <div className="flex flex-col mt-4 px-4">
                <h2 className="font-pretendard font-bold text-lg text-black">
                    전공
                </h2>                    
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <h3 className="font-pretendard font-medium text-base text-black">
                            주전공
                        </h3>
                        <div className="flex items-center justify-center w-[126px] h-[28px] rounded-lg bg-[#E4E1E1]">
                            <input
                                className="w-[100px] font-pretendard font-medium text-sm text-[#6B6B6B] bg-transparent text-center"
                                value={major}
                                onChange={(e) => setMajor(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="font-pretendard font-medium text-base text-black">
                            복수전공
                        </h3>
                        <div className="flex items-center justify-center w-[126px] h-[28px] rounded-lg bg-[#E4E1E1]">
                            <input
                                className="w-[100px] font-pretendard font-medium text-sm text-[#6B6B6B] bg-transparent text-center"
                                value={doubleMajor}
                                onChange={(e) => setDoubleMajor(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="font-pretendard font-medium text-base text-black">
                            부전공
                        </h3>
                        <div className="flex items-center justify-center w-[126px] h-[28px] rounded-lg bg-[#E4E1E1]">
                            <input
                                className="w-[100px] font-pretendard font-medium text-sm text-[#6B6B6B] bg-transparent text-center"
                                value={minor}
                                onChange={(e) => setMinor(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <hr className="mt-5 w-full border border-[#E4E1E1]" />
            </div>
            
            <div className="flex flex-col mt-4 px-4">
                <h2 className="font-pretendard font-bold text-lg text-black">
                    관심키워드
                </h2>            
                <div className="flex flex-wrap mt-2 gap-2">
                    {interest.map((data, index) => (
                        <UserInterest
                            key={index}
                            interest={data}
                            cancelInterest={cancelInterest}
                        />
                    ))}

                    {interest.length < 5 && onToggle && (
                        <div className="flex w-[100px] h-[34px] rounded-full font-pretendard font-semibold text-sm bg-[#E4E1E1] text-[#6B6B6B] items-center justify-center">
                            <input
                                className="w-[80px] font-pretendard font-medium text-sm text-[#6B6B6B] bg-transparent text-center"
                                value={newInterest}
                                onChange={(e) => setNewInterest(e.target.value)}
                            />
                        </div>
                    )}

                    {interest.length < 5 && (
                        <button onClick={handleToggle} >
                            <img src={Plus} alt="plus" className="w-5 h-5" />
                        </button>
                    )}
                </div>
            </div>

            <div className="flex justify-center mt-8 mb-4">
                <button
                    onClick={handleNavUser}
                    className="w-[120px] h-[40px] rounded-full bg-[#BCBCBC] flex items-center justify-center cursor-pointer hover:bg-[#D7E1F9] shadow-md"
                >
                    <p className="font-bold text-lg text-[18px] font-pretendard text-gray cursor-pointer hover:text-blue">
                        수정 완료
                    </p>
                </button>
            </div>
        </div>
    );
};

export default UserDetail;