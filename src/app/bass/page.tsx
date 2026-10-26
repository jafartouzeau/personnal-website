import BassTab from "@/components/basstab/basstab"
import {tabs} from "./data";

export default function Bass() {
    return <>{tabs.map((tab, index) => {
        return <BassTab key={index} id={tab.id} title={tab.title} artist={tab.artist} abc={tab.music} />
    })}</>
}