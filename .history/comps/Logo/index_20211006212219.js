import React from "react";
import styled from "styled-components";

const LogoUI = styled.img`
    position:absolute;
    left:10px;
    top:10px;
    z-index:3;
    width:100px;
    height:auto;
`;

const Fade = styled.div`
position:absolute;
top:0;
width:100%;
height: 12%;
min-height: 100px;
border:2px solid red;
z-index:2;
`;

export const Logo = ({
    onClick = () => {}
}) => {
    
    return (
        <Fade>
            <LogoUI src="/logo.svg" onClick={onClick}/>
        </Fade>
    )
}

export default Logo;