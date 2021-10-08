import React from "react";
import styled from "styled-components";

const LogoCont = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    width:50%;
    max-width:1100px;
    
`;

const LogoImg = styled.img`
animation: spin 5s linear infinite;
width
`;

const LogoText = styled.img`
position:relative;
    width:300px;
    height:auto;
    top:-3%;
`;

const Logo = () => {
    return (
        <LogoCont className="record">
            <LogoImg className="record" src="./record.svg" />
            <LogoText src="./logotext.png"/>
            
        </LogoCont>
    );
}

export default Logo;