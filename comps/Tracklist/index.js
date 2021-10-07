import React from "react";
import styled from "styled-components";
import {albums} from "@/data/albums"


const TrackCont = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    position: fixed;
    top:0;

    width: 100%;
    height: 50px;
    max-height: 50px;
    padding: 0 10px 0 10px;

    color: white;
    background-color: lightcoral;

    font-weight: 600;
`
const Tracks = styled.div`
    display:flex;
    flex-direction: row;
    white-space: nowrap;
    align-items: center;
    padding: 10px;
    animation: trackSlide 30s linear infinite;

`
export default function TracklistUI()
{
    return (
        <TrackCont >
        {albums.map((album) =>{
            return(

          <Tracks>
            {albums[1].tracklist}
          </Tracks>
            )
        })}
        </TrackCont>
    );

}