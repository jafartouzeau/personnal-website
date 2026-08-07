import { ArtworkType } from "artwork"
import Image from 'next/image'
import styles from './fiveImagesGallery.module.css'


const evry: ArtworkType[] = [{
    imageSrc: "/static/photos/evry/photo_5.jpg",
    imageAlt: "Tour en train de se faire démolir.", 
    imageTitle: "10 juin 2025, 13:02",
    imageRatio: 450/600 
},{
    imageSrc: "/static/photos/evry/photo_4.jpg",
    imageAlt: "Tour en train de se faire démolir.", 
    imageTitle: "11 juin 2025, 07:59",
    imageRatio: 450/600 
},{
    imageSrc: "/static/photos/evry/photo_3.jpg",
    imageAlt: "Tour en train de se faire démolir.", 
    imageTitle: "11 juin 2025, 13:43",
    imageRatio: 450/600 
},{
    imageSrc: "/static/photos/evry/photo_2.jpg",
    imageAlt: "Tour en train de se faire démolir.", 
    imageTitle: "13 juin 2025, 9:45",
    imageRatio: 450/600 
},{
    imageSrc: "/static/photos/evry/photo_1.jpg",
    imageAlt: "Tour en train de se faire démolir.",
    imageTitle: "15 juin 2025, 14:48", 
    imageRatio: 450/600 
}
]


function Artwork({imageSrc, imageAlt, imageRatio, imageTitle}: ArtworkType) {
    return (
            <div className={styles.artwork}>
      <div
        className={styles.imageContainer}
        style={{ aspectRatio:`${imageRatio}` } as React.CSSProperties}
      >
        <Image alt={imageAlt} src={imageSrc} fill />
      </div>
      <p className={styles.title}>{imageTitle}</p>
    </div>
    )

}

function FiveImagesGallery({artworks}:{artworks: ArtworkType[]}) {
    
    return (<>
        <div className={styles.gallery}>
            {artworks.map((artwork) => (
                <Artwork key={artwork.imageSrc} {...artwork} />
            ))}
        </div>
    
    
    </>)
}

export default function Serie2() {
    return (<>
        <p>En juillet 2024, la ville d’Évry a lancé un projet de transformation du quartier Parc aux Lièvres. Ce projet, dont la fin est prévue pour l’année 2028, a débuté par une phase de démolition de l’ensemble immobilier de la dalle.</p>
        <p>D’avril à juin 2025, j’ai régulièrement pris des photos du chantier pendant mes allers-retours entre mon appartement et mon campus.</p>
        <p>Un engin doté d’un long bras mécanique, surmonté d’une pince (visible sur la photo du 13 juin), a grignoté le béton petit à petit, jusqu’à ce qu’il ne reste plus rien. </p>
        
        <FiveImagesGallery artworks={evry}/>
        
        
        </>
    )
}