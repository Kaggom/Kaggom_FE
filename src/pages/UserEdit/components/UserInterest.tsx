// import { useCallback, useEffect, useState } from "react";
import Cancel from "../../../assets/User/cancel.svg";

interface Props {
    interest : string;
    cancelInterest : (interest:string) => void;
}

const UserInterest = ({interest, cancelInterest}:Props) => {
    return (
        <div className="flex flex-row h-[34px] rounded-[100px] font-pretendard font-semibold text-[15px] 
        bg-[#E4E1E1] text-[#6B6B6B] items-center justify-center px-[19px] py-[8px]"
        >
            {interest}
            <button onClick ={() => cancelInterest(interest)} className="ml-[2px]">
                <img src={Cancel} alt="취소" />
            </button>
        </div>
    );
}

export default UserInterest;