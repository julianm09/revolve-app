import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
import React from "react";

const ButtonUI = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 240px;
    height: 60px;
    border-radius: 50px;

    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;

    color: ${props=>props.color};
    background-color: ${props=>props.backgroundColor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Button = ({
    color='black',
    backgroundColor='black',
    buttonText='default',
    src='/'
}) => {
    return (
        <ButtonUI color={color} backgroundColor={backgroundColor} onClick={handleClick}>
            {buttonText}
        </ButtonUI>
    )
}

export default Button;