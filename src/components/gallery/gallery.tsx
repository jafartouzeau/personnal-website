import Image from "next/image"
import type { ArtworkType } from "artwork"

function Artwork({imageSrc, imageAlt, imageRatio}: ArtworkType) {
    return (
        <div 
            style={{
                position:"relative", 
                aspectRatio:`${imageRatio}`, 
                display:"flex", 
                flex: "1 1 300px",
            }}
        >
            <Image alt={imageAlt} src={imageSrc} fill/>
        </div>
    )

}

export default function Gallery({artworks}:{artworks: ArtworkType[]}) {

    
    return (<>
        <div 
            style={{
                display:"flex", 
                flexDirection:"row", 
                flexWrap: "wrap",
                width:"100%", 
                gap:"13px", 
                padding:"13px"
            }
        }>
            {artworks.map((artwork) => (
                <Artwork key={artwork.imageSrc} {...artwork} />
            ))}
        </div>
    
    
    </>)
}