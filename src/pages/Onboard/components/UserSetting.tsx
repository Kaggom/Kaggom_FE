import { useState } from "react";
import MajorDropDown from "./MajorDropDown";
import GradeDropDown from "./GradeDropDown";
import InterestButton from "./InterestButton";
import { useNavigate } from "react-router-dom";

function UserSetting() {
    const interests = ['유학', '동아리', '공모전', '장학금', '봉사활동', '졸업', '휴학', '행사'];
    
    const [major, setMajor] = useState<string>('');
    const [grade, setGrade] = useState<string>('');
    const [interest, setInterest] = useState<string[]>([]);
    const navigate = useNavigate();

    // MajorDropDown에서 선택된 값을 설정하는 함수
    const handleMajorChange = (selectedMajor: string) => {
        setMajor(selectedMajor);
    };

    // GradeDropDown에서 선택된 값을 설정하는 함수
    const handleGradeChange = (selectedGrade: string) => {
        setGrade(selectedGrade);
    };

    const handleInterestChange = (selectedInterest: string, clicked: boolean) => {
        setInterest(prevState => {
            if (clicked) {
                // 클릭된 경우: selectedInterest를 배열의 맨 앞에 추가
                return prevState.includes(selectedInterest)
                    ? prevState
                    : [selectedInterest, ...prevState];
            } else {
                // 클릭되지 않은 경우: selectedInterest를 배열에서 제거
                return prevState.filter(interest => interest !== selectedInterest);
            }
        });
    };

    const handleNavChat = () => {
        const isValid = major && grade && interest;
        if (!isValid) {
            alert("필수 정보를 모두 입력해주세요.");
            return;
        }

        navigate('/chat');
    }

    console.log(interest)

    return (
        <div className="flex flex-col justify-center items-center w-full h-screen bg-[#E3EEFD]">
            <h1 className="font-semibold text-[25px] font-pretendard text-black mb-6">
                학과와 학년 정보를 기입해주세요.
            </h1>
            
            <div className="flex flex-col items-start mb-6 w-full max-w-md px-6">
                <h2 className="font-semibold text-[20px] font-pretendard text-black mb-2">
                    학과
                </h2>
                <MajorDropDown selectedMajor={major} onMajorChange={handleMajorChange} />
            </div>

            <div className="flex flex-col items-start mb-6 w-full max-w-md px-6">
                <h2 className="font-semibold text-[20px] font-pretendard text-black mb-2">
                    학년
                </h2>
                <GradeDropDown selectedGrade={grade} onGradeChange={handleGradeChange} />
            </div>

            <h2 className="font-semibold text-[18px] font-pretendard text-black mb-4">
                학과공지에서 관심있는 키워드를 모두 선택해주세요.
            </h2>

            <div className="flex flex-wrap justify-center gap-[15px] mb-6 w-full max-w-md px-6">
                {interests.map((data, index) => (
                    <InterestButton
                        key={index}
                        interest={data}
                        onInterestChange={handleInterestChange}
                    />
                ))}
            </div>

            <button
                onClick={handleNavChat}
                className="w-[326px] h-[48px] rounded-[100px] bg-blue font-semibold text-[25px] font-pretendard text-white flex justify-center items-center">
                마치기
            </button>
        </div>
    );
}

export default UserSetting;