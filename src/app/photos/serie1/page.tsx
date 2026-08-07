import Gallery from "@/components/gallery/gallery";
import { ArtworkType } from "artwork";

const artworks: ArtworkType[] = [{
    imageSrc: "/static/photos/heron.jpg",
    imageAlt: "Photo en noir et blanc. Un héron est perché sur une branche au dessus de l'eau. Devant lui s'élève une masse de végétation menaçante et sombre.", 
    imageRatio: 1
},    
{
    imageSrc: "/static/photos/reflet1.jpg",
    imageAlt: "Photo en noir et blanc. Reflet abstrait d'un arbre dans l'eau.", 
    imageRatio: 1
},{
    imageSrc: "/static/photos/reflet2.jpg",
    imageAlt: "Photo en couleur. Reflet abstrait d'arbres dans l'eau.", 
    imageRatio: 1
},{
    imageSrc: "/static/photos/reflet3.jpg",
    imageAlt: "Photo en couleur. Reflet abstrait d'arbres dans l'eau.", 
    imageRatio: 1
}
]

export default function Serie1() {
    return <Gallery artworks={artworks}/>
}