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
height: 10%;
min-height: 100px;
background-color:#fff;
`;

export const Logo = ({
    
}) => {
    
    return (
        <Fade>
            <LogoUI onClick={onClick}/>
        </Fade>
    )
}

export default Logo;