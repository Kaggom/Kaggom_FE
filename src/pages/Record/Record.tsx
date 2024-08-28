import RecordDetail from "./components/RecordDetail";

function Record() {
    return (
        <div 
            className="flex flex-row h-auto min-h-screen w-screen" // 전체 높이와 너비를 설정
        >
                <RecordDetail />
            </div>
        );
}

export default Record;