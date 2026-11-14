import Playlist from "@/components/playlist/playlist";
import Heartbeat from "@/components/heartbeat/heartbeat";
import {tracks} from './musicData'

export default function HomePage() {
  return (
    <div style={{width:"100%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"end"}}>
        {/*<p style={{padding:"32px", textAlign:"center"}}>Website heartbeat</p>*/}
        <Heartbeat dayWidth={4} />
        {/*<p style={{padding:"32px", textAlign:"center"}}>Une sélection aux petits oignons</p>
        <Playlist tracks={tracks}/>*/}
    </div>
  );
}