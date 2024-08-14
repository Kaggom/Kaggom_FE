import { useCallback, useEffect, useState } from "react";

interface Props {
    interest : string;
    onInterestChange: (interest: string, isClicked: boolean) => void;
}

const InterestButton = ({interest, onInterestChange}:Props) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = useCallback(() => {
        setIsClicked(prevState => !prevState);
    }, []);

    useEffect(() => {
        if (onInterestChange) {
            onInterestChange(interest, isClicked);
        }
    }, [isClicked]);
    
    return (
        <button 
            onClick={handleClick} 
            className={`w-[86px] h-[41px] rounded-[100px] font-pretendard font-semibold text-[17px] ${
                isClicked ? 'bg-[#C6CFED] text-[#616573]' : 'bg-blue text-white'
            }`}
        >
            {interest}
        </button>
    );
}

export default InterestButton;