import StrudelRepl from "@/components/strudel/strudel";
import { strudelData } from '../data';
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return Object.keys(strudelData).map((strudelmusic) => ({ strudelmusic }));
}

export default async function StrudelReplPage({ params }: { params: Promise<{ strudelmusic: string }> }) {
  const { strudelmusic } = await params;
  const music = strudelData[strudelmusic];
  if (!music) return notFound();
  return <StrudelRepl code={music.code} />;
}