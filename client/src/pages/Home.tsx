import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import SendIcon from "../assets/send.png";
import { axiosInstance } from '../api/api'
import { useState } from 'react';

// styled-components를 사용하여 스타일을 정의
const HomeContainer = styled.div`
    position: absolute;
    width: 380px;
    height: 91px;
    left: 55px;
    top: 20px;
    font-family: 'Rounded Mplus 1c Bold';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 45px;
    background: linear-gradient(180deg, #80A1FF 0%, #395198 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    z-index: 2; /* Ensure HomeContainer is below Navbar */
`;

const DateText = styled.p`
    font-family: Arial, sans-serif;
    font-size: 12px;
    color: #A7ADAD;
    margin: 0; /* Remove default margin */
    position: absolute;
    top: 100px; /* Adjust this value to fine-tune the position */
    left: 45%;
    transform: translateX(-50%); /* Center horizontally */
    text-align: center;
    z-index: 1; /* Ensure DateText is below Navbar */
`;

const SendChat = styled.div`
    position: fixed; /* Change to fixed to stick to the bottom */
    width: 100%;
    height: 107px;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center; /* Center items vertically */
    justify-content: center; /* Center items horizontally */
    background: #EDF1F6; /* Light gray background */
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 0; /* Ensure SendChat is below Navbar */
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh; /* Full viewport height */
    position: relative; /* Ensure child elements are positioned relative to this container */
`;

const StyledNavbar = styled(Navbar)`
    position: fixed; /* Change to fixed so it stays on top */
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2; /* Ensure Navbar is above other components */
`;

const AddName = styled.input`
    margin-left: 5px;
    margin-right: 20px;
    width: 150px;
    height: 20px;
`

const Home: React.FC = () => {
    const today = new Date(); // Define `today` variable
    //const [userId, setUserId] = useState(0);
    const [chat, setChat] = useState('');

    const sendMessage = async () => {
        const ChatData = {chat};
        try {
            const response = await axiosInstance.post('/chat', ChatData);
            console.log(response.data);
            setChat('');
            alert('등록되었습니다.')
            
        } catch (e : any) {
            if (e.response && e.response.status === 400) {
                alert('요청 양식을 확인해주세요.')
            } else {
                console.error(e);
            }
        }
    };

    return (
        <Container>
            <StyledNavbar />
            <HomeContainer>
                <h1>KAGGOM CHAT</h1>
            </HomeContainer>
            <DateText>
                {today.toLocaleDateString()}
            </DateText>
            <SendChat>
                채팅:
                <AddName 
                    type='text' 
                    value={chat} 
                    onChange={(e) => setChat(e.target.value)}
                />
                <img 
                    src={SendIcon} 
                    alt="전송" 
                    className="send-icon" 
                    onClick={sendMessage} // 메시지 전송 핸들러 추가
                />
            </SendChat>
        </Container>
    );
}; 

export default Home;

// /* Rectangle 161125444 */

// position: absolute;
// width: 450px;
// height: 107px;
// left: 0px;
// top: 612px;

// /* Sub_Gray_color */
// background: #EDF1F6;
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


// /* Rectangle 161125445 */

// position: absolute;
// width: 328px;
// height: 45px;
// left: 28px;
// top: 626px;

// background: #FFFFFF;
// border-radius: 15px;


// /* Ellipse 2499 */

// position: absolute;
// width: 27px;
// height: 27px;
// left: 317px;
// top: 635px;

// /* Gray_color */
// background: #E4E1E1;
// opacity: 0.7;


// /* Vector 10232 */

// position: absolute;
// width: 0px;
// height: 14px;
// left: 330px;
// top: 642px;

// border: 2px solid #FFFFFF;
