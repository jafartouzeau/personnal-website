import Link from 'next/link';

export default function StrudelRepl() {

  const content = <div>
      <p>Laboratoire pour le projet collaboratif <Link href={"https://strudel.cc/workshop/getting-started/"} target="_blank">Strudel REPL</Link>.</p>
      <br></br>
      <p><Link href={"https://strudel.cc/?OEkKcZ3CdeeA"} target="_blank">"theres no soul here" by froos</Link></p>
      <p><Link href={"https://strudel.cc/?bbI7dpe_6WD6"} target="_blank">Inspo 2</Link></p>
    </div>
  
  return content;
}