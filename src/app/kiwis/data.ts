type kiwiDrawing  = {
    url: string,
    image: string,
    title: string,
    description: string,
    width: number,
    height: number,
}

export const kiwisData: Record<string, kiwiDrawing> = {
    "kiwishorrortales" :{
        url:"/kiwis/kiwishorrortales",
        title: "Kiwis Horror Tales",
        image:"/static/kiwis/KiwisHorrorTales.png",
        description: "",
        width: 1752,
        height: 2800
    },
    "relativity" :{
        url:"/kiwis/relativity",
        title: "Relativity",
        image:"/static/kiwis/Relativity.png",
        description: "",
        width: 1752,
        height: 2800
    },
    "glace" :{
    url:"/kiwis/glace",
    title: "Glace",
    image:"/static/kiwis/Glace.png",
    description: "",
    width: 1752,
    height: 2800
    }

}