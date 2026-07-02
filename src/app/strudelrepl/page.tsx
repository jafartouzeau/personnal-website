import { strudelData } from './data';
import PageTemplate from "@/components/page-template/page-template";
import Link from 'next/link';

export default function StrudelRepl() {

  const content = <></>
    /*
      <p><Link href={"https://strudel.cc/workshop/getting-started/"} target="blank">Strudel REPL</Link> est un outil pour faire de la musique qui est super cool. Un ordi, un navigateur, et c'est bon. Même pas besoin de connexion Internet, on peut aussi le faire tourner en local.</p>
      <p>Cependant, il reste utilisé par une scène musicale assez restreinte, plutôt techno, edm ou ambient. Et bien que je trouve ces genres sympas, ça reste limité. Et puis il faut reconnaître que la plupart des sessions de live coding ne sont pas très passionnates (sauf pour la légendaire <Link href={"https://www.youtube.com/@Switch-Angel"} target='blank'>Switch Angel</Link>).</p>
      <p>J'essaie d'explorer les possibilités musicales de cette plateforme, en commançant par rechercher des sonorités intéressantes, et en m'appuyant sur la nature collaborative du projet.</p>
    */  
  return <PageTemplate content={content} sideMenuLinks={Object.keys(strudelData)} sideMenuPage='strudelrepl'/>;
}