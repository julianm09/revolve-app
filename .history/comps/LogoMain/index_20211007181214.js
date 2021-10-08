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
    
`;

const LogoImg = styled.img`
animation: spin 5s linear infinite;
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
            <LogoCont className="logo">
                <LogoImg className="logo" src="./record.svg" />
                <LogoText src="./logotext.png"/>
            </LogoCont>
        </PageCont>
        
    );
}

export default Logo;