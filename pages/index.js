import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
import AlbumGrid from "@/comps/AlbumGrid";
import NowPlaying from "@/comps/NowPlaying";
import Button from "@/comps/MainButton";
import TracklistUI from "@/comps/Tracklist";
import TrackLoop from "@/comps/TrackLoop";
import { useRouter } from 'next/router';
import Logo from "@/comps/Header";

const Main = styled.div`
  display:flex;
  flex-direction:column;
  background:linear-gradient(248.52deg, #BAA148 4.79%, #A68778 42.94%, #36444B 93.48%);
  width:100vw;
  height:100vh;
`



export default function Home() {
  const router = useRouter();


  return ( <Main className="main">
    {/* <Logo display='hidden' onClick={() => router.push('/')}/> */}
    <TracklistUI/>
    <NowPlaying />
  </Main>
    

  );
}