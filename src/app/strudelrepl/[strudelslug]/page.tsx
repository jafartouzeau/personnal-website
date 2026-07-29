import StrudelRepl from "@/components/strudel/strudel";
import { strudelData } from '../data';
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return Object.keys(strudelData).map((strudelslug) => ({ strudelslug }));
}

export default async function StrudelReplPage({ params }: { params: Promise<{ strudelslug: string }> }) {
  const { strudelslug } = await params;
  const music = strudelData[strudelslug];
  if (!music) return notFound();
  const content = <StrudelRepl code={music.code} />;
  return content;
}