import { useState } from "react";
import MajorDropDown from "./MajorDropDown";
import GradeDropDown from "./GradeDropDown";

function UserSetting() {
    const [major, setMajor] = useState<string>('');
    const [grade, setGrade] = useState<string>('');

    // MajorDropDown에서 선택된 값을 설정하는 함수
    const handleMajorChange = (selectedMajor: string) => {
        setMajor(selectedMajor);
    };

    // GradeDropDown에서 선택된 값을 설정하는 함수
    const handleGradeChange = (selectedGrade: string) => {
        setGrade(selectedGrade);
    };

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
        </div>

    );
}

export default UserSetting;