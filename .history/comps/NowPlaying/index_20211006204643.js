import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
import { Spotify, Star } from "react-feather";
import Sound from 'react-sound'
import Button from "@/comps/MainButton";
import { useRouter } from 'next/router';



const Cont = styled.div`
  display:flex;
  flex-direction:column;
  width:80vw;
  max-width:1100px;
`

const BottomCont = styled.div`
  display:flex;
`

const Left = styled.div`
  display:flex;
`

const Right = styled.div`
  display:flex;
  flex-direction:column;
  flex:1;
`

const IconCont = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:flex-start;
  align-self:flex-start;
  margin-top:50px;
  margin-right:5px;
  width:100%;
`

const Icon = styled.img`
  display:flex;
  object-fit:contain;
  max-width:40px;
  z-index:2;
`

const AlbumCont = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  object-fit:cover;
  z-index:2;
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
  animation: spin 5s linear infinite;
  border-radius:50%;
  z-index:1;
  position:relative;
  overflow:hidden;
`;

const Record = styled.img`
  display:flex;
  object-fit:contain;
  width:100%;
  animation: spin 5s linear infinite;
  z-index:1;
`


const Title = styled.h1`
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 49px;
  color:white;
`

const A = styled.a`
  text-decoration:none;
`

const AlbumName = styled.p`
  font-family: 'Nunito', sans-serif;
  color:white;
  font-weight:700;
`
const Artist = styled.p`
  font-family: 'Nunito', sans-serif;
  color:white;
  font-weight:400;
`

const Year = styled.p`
  font-family: 'Nunito', sans-serif;
  color:white;
  font-weight:400;
`

const Genre = styled.p`
  font-family: 'Nunito', sans-serif;
  color:white;
  font-weight:400;
`

const StarCont = styled.div`
  display:flex;
  flex-direction:row;
`;

const ButtonCont = styled.div`
  display:flex;
  flex-direction:row;
  margin-top:40px;
  justify-content:space-between;
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
  albumName="Album Name",
  artist="Artist",
  year="Year",
  genre="Genre"
},
) => {
  const router = useRouter();
  return (
    <Cont>
      <Title>Now Playing</Title>
      <BottomCont className="now-playing">
        <Left className="left">
          <AlbumCont className="album">
            <Album className="album" src={albumsrc}/>
          </AlbumCont>
          <RecordCont className="record">
            <Record className="record" src="./record.svg"/>
          </RecordCont>
        </Left>
        <Right>
          <AlbumName>{albumName}</AlbumName>
          <Artist>{artist}</Artist>
          <Year>{year}</Year>
          <Genre>{genre}</Genre>
          <StarCont className="star-cont">
            <Star className="stars" color="white" size="40px" strokeWidth="1px"/>
            <Star className="stars" color="white" size="40px" strokeWidth="1px"/>
            <Star className="stars" color="white" size="40px" strokeWidth="1px"/>
            <Star className="stars" color="white" size="40px" strokeWidth="1px"/>
            <Star className="stars" color="white" size="40px" strokeWidth="1px"/>
          </StarCont>
          <IconCont>
            <A href={spotifylink}><Icon src="./spotify.png" onClick={onClick}/></A>
            <A><Icon src="./preview.svg" onClick={playPreview}/></A>
            <A href={applemusiclink}><Icon src="./apple-music.png" onClick={onClick}/></A>
          </IconCont>
        </Right>
      </BottomCont>
      <ButtonCont className="buttons">
        <Button backgroundColor="white" color="black" buttonText="filter by genre"/>
        <Button color="white" buttonText="shuffle"/>
        <Button backgroundColor="white" color="black" buttonText="checklist" onClick={()=>router.push('')/>
      </ButtonCont>
    </Cont>
  );
}

export default NowPlaying;


