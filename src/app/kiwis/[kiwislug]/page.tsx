import PageTemplate from "@/components/page-template/page-template";
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
  const content = <Gallery artworks={folder}/>
  return <PageTemplate content={content}  sideMenuLinks={Object.keys(kiwisData)} sideMenuPage='kiwis'/>;
}