import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
import React from "react";

export const TrackLoop = ({
    track1='track1',
    track2='track2',
    track3='track3',
    track4='track4',
    track5='track5',
    track6='track6',
    track7='track7',
    track8='track8',
    track9='track9',
    track10='track10'
}) => {
    return (
      <div id='rssBlock'>
      <p class="cnnContents">
          <span class="marqueeStyle">&nbsp;continuous infinite text loop 1 continuous infinite text loop 2 </span>
    {/* <!-- duplicate above, change style to allow continous scroll --> */}
           <span class="marqueeStyle2">&nbsp;continuous infinite text loop 3 continuous infinite text loop 4&nbsp;</span>
         </p>
         </div>
    )
}

export default TrackLoop;