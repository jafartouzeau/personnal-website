import Image from "next/image";

export default function Home() {
  return <div style={{position:"relative",  aspectRatio:"1", maxWidth:"400px", maxHeight:"400px"}}> 
              <Image alt="Abstraction" src={'/static/b&w.jpg'} fill/>
        </div>;
}
