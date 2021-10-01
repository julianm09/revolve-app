import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
import { Star, Facebook, Mail, X, Menu as MenuIcon, ShoppingCart } from "react-feather";


const ContainerUI = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GridUI = styled.div`
  width: 60%;
  min-height: 100px;
  grid-template-columns: 1fr 1fr 1fr;
  display: grid;
  grid-gap: 50px;

`;


const AlbumUI = styled.div`
    display: flex;
  background: red;
  flex-direction: column;

`;

const TitleUI = styled.div`


`;

const ReviewUI = styled.div`

    display: flex;
`;




const albums = [
    {
        "name" : "Abbey Road",
        "artist" : "The Beatles",
        "image" : "/abbey-road.png",
        "rating" : "5"
    },
    
]


export default function AlbumGrid() {
  return (
    <ContainerUI>
      <GridUI>

          <AlbumUI>
            <img width="100%"  src="abbey-road.png"/>
            <TitleUI>Abbey Road</TitleUI>
            <ReviewUI>
               { <Star/> }
           
            </ReviewUI>
          </AlbumUI>



      </GridUI>
    </ContainerUI>
  );
}
