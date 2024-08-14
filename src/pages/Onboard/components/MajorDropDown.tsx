import { useState } from "react";
import DropDown from "../../../assets/Login&Onboard/Drop.svg"
import {styled} from "styled-components";

interface MajorDropDownProps {
    selectedMajor: string;
    onMajorChange: (major: string) => void;
}

function MajorDropDown({ selectedMajor, onMajorChange }: MajorDropDownProps){
    const [isOpen, setIsOpen] = useState(false);

    const onToggle = () => setIsOpen(!isOpen);

    const onOptionClicked = (value: string) => () => {
        onMajorChange(value); // 부모 컴포넌트의 상태 업데이트 함수 호출
        setIsOpen(false);
    };

    return (
    <>
        <div className="absolute w-[255px] h-[37px] top-[230px] left-[123px] rounded-[5px] border-[2px] border-blue bg-white resize-none">
            <textarea
                className="absolute w-[214px] h-[21px] top-[5px] left-[13px] text-black font-pretendard font-semibold resize-none overflow-hidden"
                value={selectedMajor}
                placeholder="ex) 컴퓨터공학과"
            />
            <button  onClick={onToggle} className="absolute top-[9.77px] right-[8.3px]">
                <img src={DropDown} alt="드롭다운메뉴" />
            </button>
        </div>

        <div className="absolute top-[265px] left-[123px] inline-block z-50">
                {isOpen && (
                <div className="h-[217px] w-[255px] inline-block mr-2 overflow-y-scroll border-[2px] border-blue rounded-[5px] bg-white">
                    <ListItem onClick={onOptionClicked("동양화")}>동양화</ListItem>
                    <ListItem onClick={onOptionClicked("회화과")}>회화과</ListItem>
                    <ListItem onClick={onOptionClicked("예술학과")}>예술학과</ListItem>
                    <ListItem onClick={onOptionClicked("판화과")}>판화과</ListItem>
                    <ListItem onClick={onOptionClicked("조소과")}>조소과</ListItem>
                    <ListItem onClick={onOptionClicked("시각디자인전공")}>시각디자인전공</ListItem>
                    <ListItem onClick={onOptionClicked("산업디자인전공")}>산업디자인전공</ListItem>
                    <ListItem onClick={onOptionClicked("금속조형디자인과")}>금속조형디자인과</ListItem>
                    <ListItem onClick={onOptionClicked("도예유리과")}>도예유리과</ListItem>
                    <ListItem onClick={onOptionClicked("목조형가구학과")}>목조형가구학과</ListItem>
                    <ListItem onClick={onOptionClicked("섬유미술패션디자인과")}>섬유미술패션디자인과</ListItem>
                    <ListItem onClick={onOptionClicked("디자인 예술경영학부")}>디자인 예술경영학부</ListItem>
                    <ListItem onClick={onOptionClicked("자율전공")}>자율전공</ListItem>
                    <ListItem onClick={onOptionClicked("경영학부")}>경영학부</ListItem>
                    <ListItem onClick={onOptionClicked("건축학과")}>건축학과</ListItem>
                    <ListItem onClick={onOptionClicked("도시공학과")}>도시공학과</ListItem>
                    <ListItem onClick={onOptionClicked("전자전기공학부")}>전자전기공학부</ListItem>
                    <ListItem onClick={onOptionClicked("신소재공학전공")}>신소재공학전공</ListItem>
                    <ListItem onClick={onOptionClicked("화학공학전공")}>화학공학전공</ListItem>
                    <ListItem onClick={onOptionClicked("컴퓨터공학과")}>컴퓨터공학과</ListItem>
                    <ListItem onClick={onOptionClicked("산업데이터공학과")}>산업데이터공학과</ListItem>
                    <ListItem onClick={onOptionClicked("기계시스템디자인공학과")}>기계시스템디자인공학과</ListItem>
                    <ListItem onClick={onOptionClicked("영어영문학과")}>영어영문학과</ListItem>
                    <ListItem onClick={onOptionClicked("불어불문학과")}>불어불문학과</ListItem>
                    <ListItem onClick={onOptionClicked("독어독문학과")}>독어독문학과</ListItem>
                    <ListItem onClick={onOptionClicked("국어국문학과")}>국어국문학과</ListItem>
                    <ListItem onClick={onOptionClicked("수학교육과")}>수학교육과</ListItem>
                    <ListItem onClick={onOptionClicked("국어교육과")}>국어교육과</ListItem>
                    <ListItem onClick={onOptionClicked("영어교육과")}>영어교육과</ListItem>
                    <ListItem onClick={onOptionClicked("역사교육과")}>역사교육과</ListItem>
                    <ListItem onClick={onOptionClicked("교육학과")}>교육학과</ListItem>
                    <ListItem onClick={onOptionClicked("경제학부")}>경제학부</ListItem>
                    <ListItem onClick={onOptionClicked("공연예술학부")}>공연예술학부</ListItem>
                    <ListItem onClick={onOptionClicked("문화예술경영학과")}>문화예술경영학과</ListItem>
                    <ListItem onClick={onOptionClicked("디자인엔지니어링")}>디자인엔지니어링</ListItem>
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