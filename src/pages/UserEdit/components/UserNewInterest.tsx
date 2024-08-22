import { useCallback, useEffect, useState } from "react";

interface Props {
    interest : string;
}

const UserNewInterest = ({interest}:Props) => {
    return (
        <div className="flex w-[100px] h-[34px] rounded-[100px] font-pretendard font-semibold text-[15px] 
        bg-[#E4E1E1] text-[#6B6B6B] items-center justify-center px-[19px] py-[8px]"
        >
            {interest}
        </div>
    );
}

export default UserNewInterest;