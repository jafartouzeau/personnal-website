import Playlist from "@/components/playlist/playlist";
import {tracks} from './musicData'

export default function HomePage() {
  return (
    <div style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
    <p style={{padding:"32px", textAlign:"center"}}>Une sélection aux petits oignons</p>
    <Playlist tracks={tracks}/>
</div>
  );
}