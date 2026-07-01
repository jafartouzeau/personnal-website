import Image from "next/image"
import type { ArtworkType } from "artwork"

function Artwork({imageSrc, imageAlt, imageRatio}: ArtworkType) {
    return (
        <div 
            style={{
                position:"relative", 
                aspectRatio:`${imageRatio}`, 
                width:"100%"
            }}
        >
            <Image alt={imageAlt} src={imageSrc} fill/>
        </div>
    )

}

function Column({artworks}:{artworks: ArtworkType[]}) {
    return (
        <div 
            style={{
                display:"flex", 
                flexDirection:"column", 
                flex: "1 1 300px",
                gap:"13px", 
            }
        }>
            {artworks.map((artwork) => (
                <Artwork key={artwork.imageSrc} {...artwork} />
            ))}
        </div>
    )
}

export default function Gallery({artworks}:{artworks: ArtworkType[]}) {
    const columns: ArtworkType[][] = [[], [], []];

    artworks.forEach((artwork, index) => {
        columns[index % 3].push(artwork);
    });
    
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
            <Column artworks={columns[0]} />
            <Column artworks={columns[1]} />
            <Column artworks={columns[2]} />
        </div>
    
    
    </>)
}