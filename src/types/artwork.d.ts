declare module "artwork" {
  export type ArtworkType = {
    imageSrc:string | string[], 
    imageAlt:string, 
    imageTitle?:string, 
    imageRatio:number
}
}
