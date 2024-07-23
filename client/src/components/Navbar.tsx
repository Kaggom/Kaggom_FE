import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import chatIcon from '../assets/chat_noclick.png';
import scrapIcon from '../assets/scrap_noclick.png';
import setIcon from '../assets/set_noclick.png';


// 스타일링된 컴포넌트를 먼저 정의
const Bar = styled.div`
  position: absolute;
  width: 72px;
  right: 0; /* 오른쪽 끝에 위치시키기 */
  width: 72px;
  height: 100vh; /* 부모 높이에 맞추기 위해 100vh로 변경 */
  top: 0;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const NavbarItem = styled.li<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  font-size: 8px;
  font-family: Arial, sans-serif;
  color: ${props => (props.active ? '#007bff' : '#999')};
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }

  .navbar-icon {
    width: 24px;
    height: 24px;
    margin-bottom: 5px;
    display: flex; /* 아이콘을 플렉스 박스 컨테이너로 만들어 중앙 정렬 가능 */
    align-items: center; /* 아이콘 수직 중앙 정렬 */
    justify-content: center; /* 아이콘 수평 중앙 정렬 */
  }
`;

const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <Bar>
      <ul className="navbar-menu">
        <NavbarItem active={isActive('/chat')}>
          <img src={chatIcon} alt="채팅" className="navbar-icon" />
          <span>채팅</span>
        </NavbarItem>
        <NavbarItem active={isActive('/records')}>
          <img src={scrapIcon} alt="기록" className="navbar-icon" />
          <span>기록</span>
        </NavbarItem>
        <NavbarItem active={isActive('/profile')}>
          <img src={setIcon} alt="개인정보" className="navbar-icon" />
          <span>개인정보</span>
        </NavbarItem>
      </ul>
    </Bar>
  );
};

export default Navbar;