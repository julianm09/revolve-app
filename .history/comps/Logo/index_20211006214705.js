import React from "react";
import styled from "styled-components";

const LogoImg = styled.img`
    z-index:3;
    width:auto;
    height:100px;
    padding:15px;
`;

const Fade = styled.div`
    display:flex;
    position:absolute;
    top:0;
    margin-right:auto;
    margin-left:auto;
    width:1200px;
    min-height: 110px;
    height:5%;
    background-image: linear-gradient(to right, white , white, rgb(255,255,255, 0.5), transparent);
    border: 2px solid red;
    z-index:2;
`;

export const Logo = ({
    onClick = () => { },

}) => {

    return (
        <Fade>
            <LogoImg src="/logo.svg" onClick={onClick} />
        </Fade>
    )
}

export default Logo;