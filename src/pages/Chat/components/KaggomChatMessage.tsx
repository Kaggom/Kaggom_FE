import Kaggom from '../../../assets/Kaggom.svg'


interface KaggomChatProps {
    chat: string; // 'Text' 대신 'string' 타입 사용
    url? : string;
}
// { chat }: KaggomChatProps

const KaggomChatMessage = ({ chat, url }: KaggomChatProps) => {
    console.log("전달받은 ulr:",url)


    return (
        <div className = "flex flex-col">
        <div className="flex flex-row mt-8 ml-2"> {/* mt-4로 여백 조정 */}
            <img 
                src={Kaggom} 
                alt="kaggom" 
                className="mr-2" // 이미지 오른쪽 여백 추가
            />
            <div className="flex bg-white rounded-[20px] px-[12px] py-[8px]"
                style={{
                    border: '1px solid #E4E1E1', // border 스타일 적용
                    maxWidth: '286px'
                }}>
                <p
                    className="font-semibold text-left flex-wrap"
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
        {url && (
                    <a href={url} className="ml-16 mt-2 text-gray-400 text-[10px] font-bold underline hover:text-blue">
                        해당 공지로 이동하기
                    </a>
                )}
        </div>
    );
};


export default KaggomChatMessage;