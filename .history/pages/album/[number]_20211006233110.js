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
        fallback:false, //should we add a 404 page?

    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = albums.id;
    
    return {
        props: {album: albums}
    }
}

 const AlbumNumbered = (album) => {
    return ( 
        
            <NowPlaying al/>
        
     );
}
 
export default AlbumNumbered;

