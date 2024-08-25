import RecordDetail from "./components/RecordDetail";

function Record() {
    return (
        <div 
            className="flex flex-col h-screen w-full" // 전체 높이와 너비를 설정
        >
                <RecordDetail />
            </div>
        );
}

export default Record;