import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
import AlbumGrid from "@/comps/AlbumGrid";
import NowPlaying from "@/comps/NowPlaying";
import TrackLoop from "@/comps/TrackLoop";
import { useRouter } from 'next/router';



const Main = styled.div`
  display:flex;
  flex-direction:column;
  background:linear-gradient(248.52deg, #BAA148 4.79%, #A68778 42.94%, #36444B 93.48%);
  width:100vw;
  height:100vh;
`
const Logo = styled.img`
position:absolute;
left:10px;
top:10px;
z-index:2;
width:100px;
height:auto;
`;



export default function Home() {
  const router = useRouter();


  return ( <Main className="main">
    <Logo onClick={() => router.push('/checklist')}/>
    <TrackLoop/>
    <NowPlaying />
  </Main>
    

  );
}
