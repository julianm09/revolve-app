import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
import AlbumGrid from "@/comps/AlbumGrid";
import { albums } from "@/data/albums";
import GenreButton from "@/comps/GenreButton";

const ContainerUI = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
`;

const TopUI = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0;
  justify-content: center;
  align-items: center;
`;

const FilterUI = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 50px 0;
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

export default function AlbumList() {
  const [genre, setGenre] = useState("all");

  function numberOfTrueValues(obj) {
    var counter = 0;
    for (var index = 0; index < obj.length; index++) {
      if (obj[index].listened === true) {
        counter++;
      }
    }
    return counter;
  }

  return (
    <ContainerUI>
      <BackgroundUI src={"store-bg.png"} />
      <OverlayUI />

      <TopUI>
        <HeaderUI>Albums Listened</HeaderUI>

        <NumberUI>
          {numberOfTrueValues(albums)} / {albums.length}
        </NumberUI>
      </TopUI>

      <FilterUI>
      <GenreButton genre={genre} setGenre={setGenre} text="all" />
        <GenreButton genre={genre} setGenre={setGenre} />
        <GenreButton genre={genre} setGenre={setGenre} text="folk" />
        <GenreButton genre={genre} setGenre={setGenre} text="soul" />
        <GenreButton genre={genre} setGenre={setGenre} text="pop" />
        
      </FilterUI>

      <AlbumGrid genre={genre} />
    </ContainerUI>
  );
}
