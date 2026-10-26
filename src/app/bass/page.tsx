import BassTab from "@/components/basstab/basstab"
import {tabs} from "./data";

export default function Bass() {
    return <>{[...tabs].sort((a, b) =>
    a.bpm - b.bpm || a.artist.localeCompare(b.artist, "fr")
).map((tab, index) => {
        return <BassTab key={index} id={tab.id} title={tab.title} artist={tab.artist} abc={tab.music} bpm={tab.bpm} />
    })}</>
}