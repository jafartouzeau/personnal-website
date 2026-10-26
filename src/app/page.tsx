import Vinyl from "@/components/vinyl/vinyl";
import styles from "./homepage.module.css"

export default function HomePage() {
  return (
    <>
    <p style={{width:"100%", padding:"32px", textAlign:"center"}}>Une selection aux petits oignons</p>
    <div className={styles.grid}>
    <Vinyl
        imageFile="act_like_you_know.png"
        audioFile="act_like_you_know.mp3"
        title="Act Like You Know - Fat Larry's Band"
    />
    <Vinyl
        imageFile="alive.png"
        audioFile="alive.mp3"
        title="Alive 2007 - Daft Punk"
    />
    <Vinyl
        imageFile="daphnis_and_chloe.png"
        audioFile="daphnis_and_chloe.mp3"
        title="Daphnis et Chloé - Maurice Ravel"
    />
</div>
</>
  );
}