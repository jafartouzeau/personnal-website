export interface TabData {
    id: string;
    title: string;
    artist: string;
    bpm: number;
    music: string;
}

export const tabs :TabData[] = [
    {
        id: "whatsleft",
        title: "What's left",
        artist: "BowAsWell",
        music: `
       :16 5.4 :8 5.4 :16 5.4 :16 r :8 5.2 3.2 2.2 {d} x.3 {gr ob} 5.3 3.3 |
       :8 5.3 :16 5.3 5.3 :16 r :8 2.2 3.3 0.3 {d} x.4 {gr ob} 3.4 4.4 |        
        `,
        bpm:108
    }, 
    {
        id: "dontlookanyfurther",
        artist:"Dennis Edwards",
        title: "Don't Look Any Further",
        music: `
            :8 5.4 {d} :16 5.4 :16 r 3.4 :8 5.4 r :8 5.4 3.3 5.4 |
            :8 5.3 {d} :16 5.3 :16 r 3.3 :8 5.3 :4 r :8 r :16 5.3 6.3 |
            :8 7.3 {d} :16 7.3 :8 5.3 :4 7.3 :8 10.2 :16 9.2 7.2 8.4 7.4 |
            :8 5.4 {d} :16 5.4 :16 r 3.4 :8 5.4 :4 r :8 r :16 7.3 7.2 |
        `
        , bpm:95
    }, 
    {
        id: "thelessiknowthebetter",
        artist:"Tame Impala",
        title: "The Less I Know The Better",
        music: ``,
        bpm:117
    }, 
    {
        id: "fabienk",
        artist: "Angine de Poitrine",
        title: "Fabienk",
        music: ``,
        bpm: 128
    }, 
    {
        id: "breeze",
        artist: "Jiro Inagaki & Soul Media",
        title: "Breeze",
        music: ``,
        bpm:88
    },
    {
        id: "clubsoda",
        artist: "Thomas Bangalter",
        title: "Club Soda",
        music: ``,
        bpm:120
    },
    {
        id: "rappersdelight",
        artist:"The Sugar Hill Gang",
        title: "Rapper's Delight",
        music: ``,
        bpm: 112
    },
    {
        id: "iwantyouback",
        artist: "The Jackson Five",
        title: "I want you back",
        music: ``,
        bpm: 98
    }, 
    {
        id: "somethingwealladore",
        artist:"Solomun",
        title: "Something we all adore",
        music: ``,
        bpm: 120
    },
    {
        id: "nothinbutagthang",
        artist:"Dr Dre",
        title: `Nothin' but a "G" Thang`,
        music: ``,
        bpm: 95
    }, 
    {
        id: "yinde",
        artist:"BCUC",
        title: "Yinde",
        music: ``,
        bpm: 85
    },
    {
        id: "lasttraintolondon",
        artist: "Electric Light Orchestra",
        title: "Last train to London",
        music: ``,
        bpm: 121
    }, 
    {
        id: "intro",
        artist:"Alan Braxe & Fred Falke",
        title: "Intro",
        music: ``,
        bpm: 124
    }, 
    {
        id: "flowers",
        artist:  "Miley Cyrus",
        title: "Flowers",
        music: ``,
        bpm: 118
    }, 
    {
        id: "cairofm",
        artist:"Alewya",
        title:"Cairo FM",
        music: `
        :8 4.4 {tu 3} r {tu 3} 6.2 {tu 3} :16 r 6.3 4.2 {h} 6.2 
        :8 4.4 {tu 3} r {tu 3} 6.2 {tu 3} :16 r 6.3 4.2 {h} 6.2 |
        :8 2.4 {tu 3} r {tu 3} 4.2 {tu 3} :16 r 4.3 2.2 {h} 4.2 
        :8 2.4 {tu 3} r {tu 3} 4.2 {tu 3} :16 r 4.3 2.2 {h} 4.2 |     
        :8 5.4 {tu 3} r {tu 3} 7.2 {tu 3} :16 r 7.3 4.2 {h} 7.2 
        :8 5.4 {tu 3} r {tu 3} 7.2 {tu 3} :16 r 7.3 4.2 {h} 7.2 |
        :8 4.4 {tu 3} r {tu 3} 6.2 {tu 3} :16 r 6.3 4.2 {h} 6.2 
        :8 4.4 {tu 3} r {tu 3} 6.2 {tu 3} :16 r 6.3 4.2 {h} 6.2 |
        
        `,
        bpm: 111
    },
    {
        id: "nafas",
        artist:"The Spy From Cairo",
        title:"Nafas",
        music: ``,
        bpm: 140
    },
    {
        id:"morespellonyou",
        artist: "Eddie Johns",
        title:"More Spell On You",
        music: ``,
        bpm: 132
    },
    {
        id:"august10",
        artist: "Khruangbin",
        title:"August 10",
        music: `
            :8 7.4 7.4 r :16 7.4 5.3 r 7.3 r 7.4 :8 5.3 :16 7.3 7.4 |
            :8 9.3 9.3 r :16 9.3 7.2 r 9.2 r 9.3 :8 7.2 :16 9.2 9.3 |
            :8 9.2 9.2 r :16 9.2 7.1 r 9.1 r 9.2 9.1 7.1 9.2 7.2 |
            :8 9.3 9.3 r :16 7.2 9.2 r 7.2 r 9.3 7.2 9.3 7.3 5.3 |
        
        `,
        bpm: 82
    },
        {
        id:"lafemmedargent",
        artist: "AIR",
        title:"La femme d'argent",
        music: `
            :4 2.3 :16 4.2 :8 2.1 :16 4.1 -.1 :32 2.1 {h} 4.1 {h} :16 2.1 4.2 :8 2.1 4.1 {sod} |
            :8 r 4.2 :16 4.2 2.2 0.2 2.2 -.2 2.2 :8 0.3 :16 0.3 0.3 r 0.3 |
        `,
        bpm: 80
    }
                        
]