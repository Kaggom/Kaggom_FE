import SideBar from "../../components/SideBar";
import UserDetail from "./components/UserDetail";

function UserEdit() {
    return (
        <div 
        className="flex flex-row" // 전체 높이와 너비를 설정
    >
                <UserDetail />
                < SideBar />
            </div>
        );
}

export default UserEdit;