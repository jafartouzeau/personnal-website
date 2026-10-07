import Link from 'next/link';

export default function StrudelRepl() {

  const content = <div>
      <p>Laboratoire pour le projet collaboratif <Link href={"https://strudel.cc/workshop/getting-started/"} target="_blank">Strudel REPL</Link>.</p>
      <br></br>
      <p>Strudel is a JavaScript version of tidalcycles, which is a popular live coding language for music, written in Haskell. Strudel is free/open source software, with copyright owned by its <Link href={"https://codeberg.org/uzu/strudel/activity/contributors"}>contributors</Link>. You can redistribute and/or modify it under the terms of the GNU Affero General Public License. You can find the source code at codeberg. You can also find licensing info for the default sound banks there. Please consider to support this project to ensure ongoing development 💖</p>
      </div>
  
  return content;
}