import type { ArtworkType } from "artwork"

export const kiwisData: Record<string, ArtworkType[]> = {

    "posters": [
       {
            imageTitle: "Kiwis Horror Tales",
            imageSrc:"/static/kiwis/KiwisHorrorTales.png",
            imageAlt: "Des contes qui ne verront jamais le jour.",
            imageRatio: 1752/2800
        },
       {
            imageTitle: "Relativity",
            imageSrc:"/static/kiwis/Relativity.png",
            imageAlt: "Inspiré d'un certain Escher.",
            imageRatio: 1752/2800
        },
       {
            imageTitle: "Glace",
            imageSrc:"/static/kiwis/Glace.png",
            imageAlt: "Une glace goût kiwi.",
            imageRatio: 1752/2800
        }
    ]
}
