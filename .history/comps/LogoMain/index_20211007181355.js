import React from "react";
import styled from "styled-components";

// idk but for tablet screen sizes the component jumps to the top of the page. so this is my fix for now.
const PageCont = styled.div`
    width:100vw;
    height:100vh;
    margin:0;
    display:flex;
    align-items:center;
    justify-content:center;
`;


const LogoCont = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    width:300px;
`;

const LogoImg = styled.img`
animation: spin 5s linear infinite;
width:300px;
`;

const LogoText = styled.img`
    position:relative;
    width:300px;
    height:auto;
    top:-3%;
`;

const Logo = () => {
    return (
        <PageCont>
            <LogoCont>
                <LogoImgsrc="./record.svg" />
                <LogoText src="./logotext.png"/>
            </LogoCont>
        </PageCont>
        
    );
}

export default Logo;