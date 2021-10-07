import React from "react";
import styled from "styled-components";

const LogoUI = styled.img`
    position:absolute;
    z-index:3;
    width:150px;
    height:auto;
    padding:15px;
`;

const Fade = styled.div`
position:absolute;
display:flex;
top:0;
left:0;
width:250px;
min-height: 150px;
height:10%;
background-image: linear-gradient(to right, white , white, transparent);
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