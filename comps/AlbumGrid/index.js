import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
import {
  Star,
  Facebook,
  Mail,
  X,
  Menu as MenuIcon,
  ShoppingCart,
  Spotify
} from "react-feather";
import ReactStars from "react-rating-stars-component";
import {albums} from "@/data/albums"


const ContainerUI = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GridUI = styled.div`
  width: 50%;
  min-height: 100px;
  grid-template-columns: 1fr 1fr 1fr;
  display: grid;
  grid-gap: 50px;
`;

const AlbumUI = styled.div`
  display: flex;
  flex-direction: column;
`;

const AlbumImageUI = styled.img`
cursor: pointer;
transition: 0.2s ease;
&:hover{
    box-shadow: 4px 4px 10px grey;
}

`;

const TitleUI = styled.div`
font-size: 18px;
font-weight: 700;
margin: 10px 0 0 0;
`;


const ArtistUI = styled.div`
    font-size: 16px;
    margin: 5px 0 0 0;

`;

const ReviewUI = styled.div`
  display: flex;
  margin: 5px 0 0 0;
`;


export default function AlbumGrid() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <ContainerUI>
      <GridUI>
        {albums.map((album) => {
          return (
            <AlbumUI>
              <AlbumImageUI width="100%" src={album.image} style={{filter: album.listened ? "grayscale(0)" : "grayscale(100)"}} />
              <TitleUI>{album.name}</TitleUI>
              <ArtistUI>{album.artist}</ArtistUI>
              <ReviewUI>
                <ReactStars
                  count={album.rating}
                  size={24}
                  activeColor="#ffd700"
                  onChange={ratingChanged}
                />
              </ReviewUI>
            </AlbumUI>
          );
        })}
      </GridUI>
    </ContainerUI>
  );
}
