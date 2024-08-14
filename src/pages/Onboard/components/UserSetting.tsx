import { useState } from "react";
import MajorDropDown from "./MajorDropDown";
import GradeDropDown from "./GradeDropDown";
import InterestButton from "./InterestButton";

function UserSetting() {
    const interests = ['유학', '동아리', '공모전', '장학금', '봉사활동', '졸업', '휴학', '행사'];
    
    const [major, setMajor] = useState<string>('');
    const [grade, setGrade] = useState<string>('');
    const [interest, setInterest] = useState<string[]>([]);

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

    console.log(interest)

    return(
        <div className = "relative w-full h-screen bg-[#E3EEFD]">
            <h1 className = "absolute top-[166px] font-semibold text-[25px] font-pretendard text-black left-1/2 transform -translate-x-1/2 flex items-center whitespace-nowrap">
                학과와 학년 정보를 기입해주세요.
            </h1>
            <h2 className = "absolute top-[233px] left-[56px] font-semibold text-[20px] font-pretendard text-black">
                학과
            </h2>
            <MajorDropDown selectedMajor={major} onMajorChange={handleMajorChange} />

            <h2 className = "absolute top-[289px] left-[56px] font-semibold text-[20px] font-pretendard text-black">
                학년
            </h2>
            <GradeDropDown selectedGrade={grade} onGradeChange={handleGradeChange} />
            <div className="absolute top-[391px] left-1/2 transform -translate-x-1/2 flex items-center justify-center w-full">
                <h2 className="font-semibold text-[18px] font-pretendard text-black">
                    학과공지에서 관심있는 키워드를 모두 선택해주세요.
                </h2>
            </div>

            <div className="relative top-[419px] flex flex-wrap mt-[35px] mr-[28px] ml-[28px] mb-[35px] gap-[15px]">
                {interests.map((data, index) => (
                    <InterestButton
                        key={index}
                        interest={data}
                        onInterestChange={handleInterestChange}
                    />
                ))}
            </div>

            <button className="absolute top-[625px] left-[62px] w-[326px] h-[48px] rounded-[100px] bg-blue 
                    font-semibold text-[25px] font-pretendard text-white justify-center items-center">
                마치기
            </button>
        </div>




    );
}

export default UserSetting;