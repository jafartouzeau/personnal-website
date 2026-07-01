import { kiwisData } from './data';
import PageTemplate from "@/components/page-template/page-template";

export default function Kiwis() {

  const content = 
    <>
        <p>Le petit kiwi se promène tranquillement. Tout va bien, rien ne va mal.</p>
        <p>Il rencontre un oiseau perché sur la branche d'un arbre et lui demande :</p>
        <p>"Comment es-tu arrivé là haut ?"</p>
        <p>Ce à quoi l'oiseau lui répond :</p>
        <p>"En volant bien sûr !"</p>
        <p>Et c'est alors que le petit kiwi réalise qu'il ne sait pas voler.</p>
        <p>Depuis ce jour, rien ne va bien, tout va mal.</p>
    </>
  
  return <PageTemplate content={content} sideMenuData={kiwisData}/>;
}