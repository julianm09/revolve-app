import React from "react";

import styled from "styled-components";

const LogoCont = styled.div`
    display:flex;
    flex-direction:column;
    width:50%;
    max-width:1100px;
    border: 2px solid red;
`;

const LogoImg = styled.img`

`;

const Logo = () => {
    return (
        <LogoCont className="record">
            <LogoImg className="record" src="./record.svg" />
        </LogoCont>
    );
}

export default Logo;