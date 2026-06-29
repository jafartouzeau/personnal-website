import PageTemplate from "@/components/page-template/page-template";
import Image from "next/image";
import { kiwisData } from '../data';
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return Object.keys(kiwisData).map((kiwislug) => ({ kiwislug }));
}

export default async function KiwiPage({ params }: { params: Promise<{ kiwislug: string }> }) {
  const { kiwislug } = await params;
  const kiwi = kiwisData[kiwislug];
  if (!kiwi) return notFound();

  const ratio = kiwi.width/kiwi.height;

  const content = 
  <div style={{position:"relative", aspectRatio:`${ratio}`, width:"100%", maxWidth:"600px"}}>
      <Image alt={kiwi.description} fill src={kiwi.image}/>;

  </div>

  return (
            <PageTemplate content={content} sideMenuData={kiwisData}/>

          );
}