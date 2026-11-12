import Playlist from "@/components/playlist/playlist";
import Heartbeat from "@/components/heartbeat/heartbeat";
import {tracks} from './musicData'

export default function HomePage() {
  return (
    <div style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
        <p style={{padding:"32px", textAlign:"center"}}>Heartbeat</p>
        <Heartbeat dayWidth={4} />
        <p style={{padding:"32px", textAlign:"center"}}>Une sélection aux petits oignons</p>
        <Playlist tracks={tracks}/>
    </div>
  );
}