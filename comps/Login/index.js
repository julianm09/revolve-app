import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
import React from "react";
import MainButton from "@/comps/MainButton";

const LoginUI = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
`

const Input = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 240px;
    height: 60px;
    border-radius: 50px;
    margin-bottom: 25px;

    color: ${props=>props.color};
    background-color: ${props=>props.backgroundColor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    placeholder: ${props=>props.placeholder};
`

export const Login = ({
    color='black',
    backgroundColor='black',
    buttonText='default',
    placeholder='placeholder',
}) => {
    return (
        <LoginUI>
            <Input type="email" placeholder="username"/>
            <Input type="password" placeholder="password"/>
            <MainButton color="white" buttonText="login"/>
        </LoginUI>
    )
}

export default Login;