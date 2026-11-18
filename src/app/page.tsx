import Image from "next/image";

export default function HomePage() {
  return (
    <div style={{width:"100%", height:"90%", display:"flex", flexDirection:"column", justifyContent:"end"}}>
        {/*<p style={{padding:"32px", textAlign:"center"}}>Website heartbeat</p>*/}
        <div 
          style={{ position: "relative", flex: 1, minHeight: 0, width: "100%" }}
          className="homeImage">
          <Image
            src="/static/IMG_0618 1.jpg"
            alt="Oiseaux volants"
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
      </div>
      

        {/*<p style={{padding:"32px", textAlign:"center"}}>Une sélection aux petits oignons</p>
        <Playlist tracks={tracks}/>*/}
    </div>
  );
}