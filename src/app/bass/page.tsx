import BassTab from "@/components/basstab/basstab"



export default function Bass() {
    return (<>
    <BassTab id="whatsleft" abc={"X:1\nK:D\nDD AA|BBA2|\n"} />
    <BassTab id="first" abc={`X:1
T: Cooley's
M: 4/4
L: 1/8
R: reel
K: G
|:D2|EB{c}BA B2 EB|~B2 AB dBAG|FDAD BDAD|FDAD dAFD|`} options={{tablature: [{instrument: 'violin'}]}}/>
    
    <BassTab id="second" abc={`X:1
T: Cooley's
M: 4/4
L: 1/8
R: reel
K: G
|:D2|EB{c}BA B2 EB|~B2 AB dBAG|FDAD BDAD|FDAD dAFD|`} options={{tablature: [{instrument: 'violin'}]}}/>
    

    <BassTab id="third" abc={`X:1
T: Cooley's
M: 4/4
L: 1/8
R: reel
K: G
|:D2|EB{c}BA B2 EB|~B2 AB dBAG|FDAD BDAD|FDAD dAFD|`} options={{tablature: [{instrument: 'violin'}]}}/>

 <BassTab id="fourth" abc={`X:1
T: Cooley's
M: 4/4
L: 1/8
R: reel
K: G
|:D2|EB{c}BA B2 EB|~B2 AB dBAG|FDAD BDAD|FDAD dAFD|`} options={{tablature: [{instrument: 'violin'}]}}/>

 <BassTab id="fifth" abc={`X:1
T: Cooley's
M: 4/4
L: 1/8
R: reel
K: G
|:D2|EB{c}BA B2 EB|~B2 AB dBAG|FDAD BDAD|FDAD dAFD|`} options={{tablature: [{instrument: 'violin'}]}}/>
    
    
    </>

    )

}