import { useState } from "react";
import DropDown from "../../../assets/Login&Onboard/Drop.svg"
import {styled} from "styled-components";

interface GradeDropDownProps {
    selectedGrade: string;
    onGradeChange: (grade: string) => void;
}


function GradeDropDown({ selectedGrade, onGradeChange }: GradeDropDownProps){
    const [isOpen, setIsOpen] = useState(false);

    const onToggle = () => setIsOpen(!isOpen);

    const onOptionClicked = (value: string) => () => {
        onGradeChange(value); // 부모 컴포넌트의 상태 업데이트 함수 호출
        setIsOpen(false);
    };

    return (
    <>
        <div className="absolute w-[255px] h-[37px] top-[286px] left-[123px] rounded-[5px] border-[2px] border-blue bg-white resize-none z-40">
            <textarea
                className="absolute w-[214px] h-[21px] top-[5px] left-[13px] text-black font-pretendard font-semibold resize-none overflow-hidden"
                value={selectedGrade}
                placeholder="ex) 1학년"
            />
            <button  onClick={onToggle} className="absolute top-[9.77px] right-[8.3px]">
                <img src={DropDown} alt="드롭다운메뉴" />
            </button>
        </div>

        {isOpen && <div className="absolute top-[321px] left-[123px] inline-block h-[217px] w-[255px] z-50">
                {isOpen && (
                <div className="w-[100%] h-[100%] inline-block mr-2 overflow-y-scroll border-[2px] border-blue rounded-[5px] bg-white ">
                    <ListItem onClick={onOptionClicked("1학년")}>1학년</ListItem>
                    <ListItem onClick={onOptionClicked("2학년")}>2학년</ListItem>
                    <ListItem onClick={onOptionClicked("3학년")}>3학년</ListItem>
                    <ListItem onClick={onOptionClicked("4학년")}>4학년</ListItem>
                    <ListItem onClick={onOptionClicked("5학년")}>5학년</ListItem>
                    <ListItem onClick={onOptionClicked("6학년")}>6학년</ListItem>
                    <ListItem onClick={onOptionClicked("6학년")}>대학원생</ListItem>
                </div>
            )}
        </div>
    }

    </>
    );
}

export default GradeDropDown;

const ListItem = styled.li`
    color: black;
    left: 13px;
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: 15px;
    list-style: none;
    padding: 0rem;
    z-index: 1;
    padding: 0 10px; // 좌우 여백 추가
    height: 37px; // 항목의 높이 설정
    border-bottom: 1px solid #d1d5db; // Tailwind의 gray-300
    cursor: pointer;
    font-family: 'Pretendard', sans-serif; // Pretendard 폰트 적용
  font-weight: 600; // Semi-bold

    &:last-child {
        border-bottom: none; // 마지막 항목의 하단 구분선 제거
    }

    &:hover {
        background-color: #f1f5f9; /* Tailwind의 gray-100 */
        color: #1f2937; /* Tailwind의 gray-800 */
    }
`;