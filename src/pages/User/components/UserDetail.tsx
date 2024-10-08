import Header from "./Header";
import Profile from "../../../assets/User/profile.webp"
import { Link } from "react-router-dom";
import UserInterest from "./UserInterest";
// import { useAuthStore } from "../../../useLogin";
import axios from "axios";
import { useEffect, useState } from "react";

const UserDetail = () => {
    // const interests = ['유학', '동아리', '공모전'];
    // const {login, isAuthenticated} = useAuthStore();
    // const navigate = useNavigate();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [major, setMajor] = useState<string>('');
    // const [doubleMajor, setDoubleMajor] = useState<string>('');
    // const [minor, setMinor] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [keywords, setKeywords] = useState<string[]>([]);

    const userApi = async () => {
        // logined가 false이거나 존재하지 않을 때 리다이렉트
        // if (isAuthenticated || isAuthenticated === null ) {
        //     login();
        // } else {
        //     alert("로그인부터 해주세요");
        //     navigate('/');
        // }
        
        try {
            // const response = await axios.post('https://kaggom.online/user',
            //     {},
            //     {
            //         params: { snsid: snsid }
            //     }
            // );
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
            setKeywords(response.data.keywords);
        } catch (error) {
            console.error('API 요청 중 오류 발생:', error instanceof Error ? error.message : error);
            return null;
        }
    };

    useEffect(() => {
        userApi();
    }, []);

    return (
        <div className="w-full h-screen overflow-y-auto bg-gradient-to-b from-white to-[#EDF1F6] flex flex-col">
            <Header header="개인정보" />
            <div className="flex flex-col justify-center items-center px-4">
                <img src={Profile} alt="프로필" className=" w-[70px] h-[70px]" />
                <span className="mt-2 font-pretendard font-bold text-base text-black">
                    {name}
                </span>
                <span className="font-pretendard font-normal text-sm text-black">
                    홍익대 서울캠 {year}
                </span>
                <Link
                    to="/user/edit"
                    className="mt-1 font-pretendard font-bold text-xs text-[#B7B4B4] cursor-pointer hover:text-blue"
                >
                    프로필 수정
                </Link>
                <hr className="mt-1 w-full border border-[#E4E1E1]" />
            </div>

            <div className="flex flex-col px-4 mt-4">
                <h2 className="font-pretendard font-bold text-lg text-black">
                    계정
                </h2>                    
                <h3 className="flex justify-between mt-4 text-base font-pretendard font-medium text-black">
                    이메일
                    <p className="text-sm">
                        {email}
                    </p>
                </h3>
                <hr className="mt-5 w-full border border-[#E4E1E1]" />
            </div>

            <div className="flex flex-col px-4 mt-4">
                <h2 className="font-pretendard font-bold text-lg text-black">
                    전공
                </h2>                    
                <h3 className="flex justify-between mt-4 text-base font-pretendard font-medium text-black">
                    주전공
                    <p className="text-sm">
                        {major}
                    </p>
                </h3>
                <h3 className="flex justify-between mt-2 text-base font-pretendard font-medium text-black">
                    복수전공
                    <p className="text-sm">
                        산업데이터공학과
                    </p>
                </h3>
                <h3 className="flex justify-between mt-2 text-base font-pretendard font-medium text-black">
                    부전공
                    <p className="text-sm">
                        국어교육과
                    </p>
                </h3>
                <hr className="mt-5 w-full border border-[#E4E1E1]" />
            </div>
            
            <div className="flex flex-col px-4 mt-4">
                <h2 className="font-pretendard font-bold text-lg text-black">
                    관심키워드
                </h2>           
                <div className="flex flex-wrap mt-2 gap-2">
                    {keywords.map((data, index) => (
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
