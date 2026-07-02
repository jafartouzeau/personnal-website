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
    ],
    "formatcarre": [
       {
            imageTitle: "Compte sur ses doigts",
            imageSrc:"/static/kiwis/Compter.png",
            imageAlt: "Il s'ennuie très vite à nouveau.",
            imageRatio: 1
        },
       {
            imageTitle: "Flûte à bec",
            imageSrc:"/static/kiwis/Flûteàbec.png",
            imageAlt: "Dresseur de serpents.",
            imageRatio: 1
        },
       {
            imageTitle: "Lejourj",
            imageSrc:"/static/kiwis/Lejourj.png",
            imageAlt: "Hommage à un certain Prokofiev.",
            imageRatio: 1
        }
    ]
}
