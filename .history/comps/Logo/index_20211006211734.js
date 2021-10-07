import React from "react";
import styled from "styled-components";

const LogoUI = styled.img`
    position:absolute;
    left:10px;
    top:10px;
    z-index:2;
    width:100px;
    height:auto;
`;

const Fade = styled.div`
position:absolute;
top:0;
width:100%;
height: ;
`;

export const Logo = ({}) => {
    onClick = () => {}
    return (
        <LogoUI onClick={onClick}/>
    )
}

export default Logo;