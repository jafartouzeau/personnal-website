import Image from 'next/image'

export default function Carte() {
    return <div style={{position:"relative", width:"100%", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius:"2px"}}>
        <Image src="/static/smady/carte.jpg" alt="Carte où se déroule l'histoire" width={1975} height={1374} style={{ width: "100%", height: "auto" }}/>
    </div>
}