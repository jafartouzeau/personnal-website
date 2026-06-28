import { strudelData } from './data';
import PageTemplate from "@/components/page-template/page-template";
import Link from 'next/link';

export default function StrudelRepl() {

  const content = 
    <>
      <p>J'utilise <Link href={"https://strudel.cc/"} target="blank">Strudel REPL</Link> depuis 2026.</p>
      <p>Volez mes morceaux et faites vivre ce projet !</p>
    </>
  
  return (  
            <PageTemplate content={content} sideMenuData={strudelData}/>
  );
}