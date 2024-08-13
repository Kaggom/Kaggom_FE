import { useState } from "react";
import DropDown from "../../../assets/Login&Onboard/Drop.svg"
import {styled} from "styled-components";


function MajorDropDown(){
    const [major, setMajor] = useState<string>('');
    const [isOpen, setIsOpen] = useState(false);

    const onToggle = () => setIsOpen(!isOpen);

    const onOptionClicked = (value: string, index: number) => () => {
        setMajor(value);  // 선택된 카테고리 값 업데이트
        setIsOpen(false);
    };

    return (
    <>
        <div className="fixed w-[255px] h-[37px] top-[230px] left-[655px] rounded-[5px] border-[2px] border-blue bg-white resize-none">
            <textarea
                className="absolute w-[214px] h-[21px] top-[5px] left-[13px] text-black font-pretendard font-semibold resize-none overflow-hidden"
                value={major}
                placeholder="ex) 컴퓨터공학과"
            />
            <button  onClick={onToggle} className="absolute top-[9.77px] right-[8.3px]">
                <img src={DropDown} alt="드롭다운메뉴" />
            </button>
        </div>

        <div className="fixed top-[265px] left-[655px] inline-block z-50">
                {isOpen && (
                <div className="h-[217px] w-[255px] inline-block mr-2 overflow-y-scroll border-[2px] border-blue rounded-[5px] bg-white">
                    <ListItem onClick={onOptionClicked("발라드", 1)}>발라드</ListItem>
                    <ListItem onClick={onOptionClicked("알앤비", 2)}>알앤비</ListItem>
                    <ListItem onClick={onOptionClicked("랩", 3)}>랩</ListItem>
                    <ListItem onClick={onOptionClicked("락", 4)}>락</ListItem>
                    <ListItem onClick={onOptionClicked("트로트", 5)}>트로트</ListItem>
                    <ListItem onClick={onOptionClicked("인디", 6)}>인디</ListItem>
                </div>
            )}
        </div>

    </>
    );
}

export default MajorDropDown;

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