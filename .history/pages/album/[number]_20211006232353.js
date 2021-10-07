import NowPlaying from "@/comps/NowPlaying";
import Home from "..";
import Header from '../../comps/Header';
import { albums } from "@/data/albums";

export const getPaths = () =>{
    const paths = albums.map(album =>{
        return {
            params: {id: albums.id}
        }
    })
    return {
        paths,
        fallback:false 
    }
}

 const AlbumNumbered = () => {
    return ( 
        
            <NowPlaying />
        
     );
}
 
export default AlbumNumbered;

