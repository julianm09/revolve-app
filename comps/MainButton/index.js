import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
import React from "react";


const ButtonUI = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid white;

    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;

    color: ${props=>props.color};
    background-color: ${props=>props.backgroundColor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Button = ({ 
    
    color='white',
    backgroundColor='none',
    buttonText='default',
    onClick = () => {},
    
}) => {
    
    return (
        <ButtonUI color={color} backgroundColor={backgroundColor} onClick={onClick}>
            {buttonText}
        </ButtonUI>
    )
}

export default Button;