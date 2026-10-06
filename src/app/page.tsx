import { Bento, BentoItem } from "@/components/bento/bento";
import Vinyl from "@/components/vinyl/vinyl";

export default function Home() {
  return (
    <Bento cols={5} rows={3}>
      <BentoItem col={1} row={2} w={2} h={2}>
        <Vinyl 
imageFile="act_like_you_know.png" 
audioFile="act_like_you_know.mp3"
title="Act Like You Know - Fat Larry's Band"/>

      </BentoItem>

      <BentoItem col={3} row={1}>
       <Vinyl 
imageFile="alive.png" 
audioFile="alive.mp3"
title="Alive 2007 - Daft Punk"/>

      </BentoItem>

      <BentoItem col={4} row={3}>
          <Vinyl 
    imageFile="daphnis_and_chloe.png" 
    audioFile="daphnis_and_chloe.mp3"
    title="Daphnis et Chloé - Maurice Ravel"/>
      </BentoItem>
    </Bento>
  );
}