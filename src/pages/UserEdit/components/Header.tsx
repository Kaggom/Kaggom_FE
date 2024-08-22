interface Props {
    header : string;
}

const Header = ({header}:Props) => {
    return(
        <div className="w-[100%] h-[87px] flex items-center ml-[28px]">
            <h1 className="font-pretendard font-bold text-[25px] text-blue">
                {header}
            </h1>
        </div>
    );
}

export default Header;