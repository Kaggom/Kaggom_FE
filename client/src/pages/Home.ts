import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
    return (
        <>
        <Navbar />
        <HomeContainer>
            <h1>KAGGOM CHAT</h1>

        </HomeContainer>
        </>
    );
};

export default Home;


h1{
    /* KAGGOM CHAT */

    position: absolute;
    width: 212px;
    height: 45px;
    left: 91px;
    top: 20px;

    font-family: 'Rounded Mplus 1c Bold';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 45px;
    /* identical to box height */

    background: linear-gradient(180deg, #80A1FF 0%, #395198 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}

