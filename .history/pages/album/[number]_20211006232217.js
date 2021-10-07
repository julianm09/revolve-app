import NowPlaying from "@/comps/NowPlaying";
import Home from "..";
import Header from '../../comps/Header';
import { albums } from "@/data/albums";

export const getStaticPaths = async () =>{
    const paths = albums.map(album =>{
        
    })
}

 const AlbumNumbered = () => {
    return ( 
        
            <NowPlaying />
        
     );
}
 
export default AlbumNumbered;

