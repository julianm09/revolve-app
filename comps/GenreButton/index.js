import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
import AlbumGrid from "@/comps/AlbumGrid";
import { albums } from "@/data/albums";

const ButtonUI = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  cursor: pointer;
`;

const TopUI = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0;
  justify-content: center;
  align-items: center;
`;

const HeaderUI = styled.div`
  font-size: 36px;
  margin: 10px 0;
`;

const NumberUI = styled.div`
  font-size: 24px;
  margin: 10px 0;
`;

const BackgroundUI = styled.img`
  position: fixed;
  top: 0px;
  left: 0;
  z-index: -100;
`;
const OverlayUI = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  z-index: -50;
  width: 100%;
  height: 100vh;
  background: black;
  opacity: 90%;
`;

export default function GenreButton({setGenre, text="rock", genre}) {

  return (
    <ButtonUI style={{opacity: genre == text ? '100%' : '60%'}} onClick={() => setGenre(text)}>
{text}
    </ButtonUI>
  );
}
