interface UserChatProps {
    chat: string; // 'Text' 대신 'string' 타입 사용
}
// { chat }: KaggomChatProps

const UserChatMessage: React.FC<UserChatProps> = ({ chat }) =>  {
    return (
        <div className="relative h-[63px] w-[380px]">
            <div className="absolute top-[11px] right-[21px] bg-[#E4E1E1] rounded-[20px] px-[12px] py-[8px]"
                style={{
                    border: '1px solid #E4E1E1', // border 스타일, 두께, 색상 적용
                    maxWidth: '286px'
                }}>
                <p
                    className="font-semibold text-left"
                    style={{
                        fontFamily: 'Pretendard',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'black',
                        margin: 0, // 기본 margin 제거
                    }}
                >
                    {chat}
                </p>
            </div>
        </div>
    );
}

export default UserChatMessage;