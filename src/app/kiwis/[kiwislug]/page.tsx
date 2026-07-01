import PageTemplate from "@/components/page-template/page-template";
//import Image from "next/image";
import { kiwisData } from '../data';
import { notFound } from "next/navigation";
import Gallery from "@/components/gallery/gallery";

export function generateStaticParams() {
  return Object.keys(kiwisData).map((kiwislug) => ({ kiwislug }));
}

export default async function KiwiPage({ params }: { params: Promise<{ kiwislug: string }> }) {
  const { kiwislug } = await params;
  const folder = kiwisData[kiwislug];
  if (!folder) return notFound();

  const content = 

  /*
  <div style={{position:"relative", aspectRatio:`${kiwi.whration}`, width:"100%", maxWidth:"600px"}}>
      <Image alt={kiwi.description} fill src={kiwi.image}/>;

  </div>
*/

  <Gallery artworks={folder}/>

  return (
            <PageTemplate content={content} sideMenuData={kiwisData}/>

          );
}