import Image from "next/image"

export default function Smady() {
    return (
    <>
        <div style={{width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <Image 
                src={"/static/smady/omniculus.png"} 
                alt="L'Omniculus" 
                width={800} 
                height={800} 
                style={{
                    width:"300px",
                    height:"300px"
                }}
                />
        </div>
    </>)
}