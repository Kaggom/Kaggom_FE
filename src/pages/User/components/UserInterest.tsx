import { useCallback, useEffect, useState } from "react";

interface Props {
    interest : string;
}

const UserInterest = ({interest}:Props) => {
    return (
        <div className="flex h-[34px] rounded-[100px] font-pretendard font-semibold text-[15px] 
        bg-[#D7E1F9] text-blue items-center justify-center px-[19px] py-[8px]"
        >
            {interest}
        </div>
    );
}

export default UserInterest;