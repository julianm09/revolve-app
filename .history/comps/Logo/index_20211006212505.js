import React from "react";
import styled from "styled-components";

const LogoUI = styled.img`
    position:absolute;
    top:10px;
    z-index:3;
    width:100px;
    height:auto;
`;

const Fade = styled.div`
position:absolute;
display:flex;
top:0;
left:10px;
width:200px;
min-height: 120px;
height:10%;
background-image: linear-gradient(to right, white , transparent);
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