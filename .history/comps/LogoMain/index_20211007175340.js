import React from "react";
import styled from "styled-components";

const LogoCont = styled.div`
    display:flex;
    flex-direction:column;
    width:50%;
    max-width:1100px;
    border: 2px solid red;
`;

const LogoImg = styled.div`

`;

const Logo = () => {
    return (
        <LogoCont>
            <LogoImg className="re"/>
        </LogoCont>
    );
}

export default Logo;