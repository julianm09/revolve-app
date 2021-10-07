import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
import AlbumGrid from "@/comps/AlbumGrid";
import NowPlaying from "@/comps/NowPlaying";
import TracklistUI from "@/comps/Tracklist";

export default function Home() {

  return (
    <>
  <TracklistUI/>
    </>
  );
}
