
import StrudelRepl from "@/components/strudel/strudel";
import {strudelData} from './data';

export default function StrudelReplPage() {
    return (
        <>
        {Object.entries(strudelData).map(([name, strudelMusicData]) => (
            <StrudelRepl key={name} code={strudelMusicData.code} />
        ))}
        </>
    )
}