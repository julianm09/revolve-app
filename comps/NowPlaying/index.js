import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
import { Spotify } from "react-feather";
import Sound from 'react-sound'

const Cont = styled.div`
  display:flex;
  flex-direction:column;
`

const TopCont = styled.div`
  display:flex;
  flex-direction:row;
`
const IconCont = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-evenly;
  width:30vw;
  max-width:370px;
  top:20vh;
  margin-top:20px;
`

const AlbumCont = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:30vw;
  max-width:370px;
  object-fit:cover;
  z-index:2;
  position:absolute;
  left:0vw;
`
const Album = styled.img`
  display:flex;
  object-fit:contain;
  width:100%;
  z-index:2;
`

const RecordCont = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  object-fit:cover;
  width:30vw;
  max-width:450px;
  max-height:450px;
  animation: spin 5s linear infinite;
  border-radius:50%;
  z-index:1;
  position:absolute;
  left:15vw;
`;

const Record = styled.img`
  display:flex;
  object-fit:contain;
  width:100%;
  max-width:370px;
  max-height:370px;
  animation: spin 5s linear infinite;
  z-index:1;
`

const Icon = styled.img`
  display:flex;
  object-fit:contain;
  max-width:40px;
  z-index:2;
`

const NowPlaying = ({
  albumsrc="../whats-going-on.png",
  spotifylink="https://open.spotify.com/album/2v6ANhWhZBUKkg6pJJBs3B?si=FfttYBUDQJm0k0JaC1ftlg&dl_branch=1",
  preview="",
  applemusiclink="https://music.apple.com/ca/album/whats-going-on/1538081586",
  onClick = () => {},
  playPreview = () => {
    url="",
    playStatus={},
    playFromPosition={},
    onLoading={},
    onPlaying={},
    onFinishedPlaying={}
  },
}) => {
  return (
    <Cont>
      <TopCont>
        <AlbumCont>
          <Album src={albumsrc}/>
          <IconCont>
            <a href={spotifylink}><Icon src="./spotify.png" onClick={onClick}/></a>
            <Icon src="./preview.svg" onClick={playPreview}/>
            <a href={applemusiclink}><Icon src="./apple-music.png" onClick={onClick}/></a>
          </IconCont>
        </AlbumCont>
        <RecordCont>
          <Record src="./record.svg"/>
        </RecordCont>
      </TopCont>
    </Cont>
  );
}

export default NowPlaying;

