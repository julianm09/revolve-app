import React from "react";
import styled from "styled-components";
import TrackLoop from "../TrackLoop";

const LogoImg = styled.img`
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
    width:100%;
    min-height: 10px;
    height:5%;
    background-image: linear-gradient(to right, white , rgb(255,255,255, 0.75), rgb(255,255,255, 0.25), transparent);
  
`;

export const Logo = ({
    onClick = () => { },

}) => {

    return (
        <Fade>
            <TrackLoop />
            <LogoImg src="/logo.svg" onClick={onClick} />
        </Fade>
    )
}

export default Logo;