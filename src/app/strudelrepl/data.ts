export type StrudelMusicType = {
    code: string;
    artist: string;
    type: string; //remix or original
    description: string;
    url: string,
    title: string,
}

export const strudelData: Record<string, StrudelMusicType> = {
    "veridisquo" : {
        code: 
`setCpm(105/4)

const currentScale = "a:minor"

$drum: stack(
s("bd:6!4").duck("2:3").duckattack(.2).duckdepth(.8),
s("[~ sd:14]!2").lpf(3000),
s("sr16_sh!16").lpf(3000).attack(rand.range(0, 0.25))
)
.gain(slider(0.867,0,1))
._scope()

$pad: n("<[-4,3,5]@0.875 [-1,3,6] [0,2,4] [[-2 -3],0,2] [-4,3,5]@0.125>")
.scale(currentScale)   
.s("gm_rock_organ")
.lpf(1000)
.room(2)
.o(2)
._punchcard()

$lead1: stack(
n("<~@2 5 4 5 3@3 5 2 5 1@23    4 3 4 2@3 4 1 4 0@23    5 4 5 3@3 5 2 5 1@23    4 3 4 2 4 1 4 0@23>*16".add(7)),
//n("<~@2 7 6 7 5@3 7 4 7 3@23    6 5 6 4@3 6 3 6 2@23    5 4 5 3@3 5 2 5 1@23    4 3 4 2 4 1 4 0@23>*16".add(7)).distort(.2)
)
.scale(currentScale)   
.s("gm_flute:4")
.lpf(2000)
.room(.5)
.decay(5)
._pianoroll()

$lead2: stack(
n("<[3] [3 6!4] [6 7!4] [7 5 5 4 4]>".sub(7))
.struct("<x@2 x@1.5 x@1.5 x@1.5 x@1.5>*8"),
n("<[3!16] [3 6!15] [6 7!15] [7!4 5!4 4!6 3!2]>".sub(14))
.gain(.9)
)
.scale(currentScale)   
.s("supersaw")
.lpf(1000)
.distort(1.4)
.o(2)
.lpenv(sine.range(0, 6).slow(4))
.pan(sine.range(0.1, 0.9).slow(2))
.gain(slider(1,0,1))
._spiral()


$pads: n("<[-4,3,5]@0.875 [-1,3,6] [0,2,4] [[-2 -3],0,2] [-4,3,5]@0.125>".add(7))
.scale(currentScale)   
.s("sawtooth")
.patt(.2)
.room(2)
.jux(rev)
.delay(.1)
.late(.125)
.postgain(.2)
.off(1/4, add(note(12)))
.vib("4:.5")
.o(3)`,
        artist: "Daft Punk",
        type: "Remix",
        description: "",
        url: "/strudelrepl/veridisquo",
        title: "Veridis Quo"
    }, 
    "track1":{
        code:
`setCpm(115/4)

const chords = "<g:major e:minor b:minor!2>"

$sub_bass: n("<0 0 0 0 0 0 0 -3>".sub(14))
  .scale(chords)
  .s("supersaw")
  .lpf(500)
  .distort(1)
  .postgain(.8)

$bass: 
  n("<0 0 7 0 ~ 0 7 0>*8".sub(7))
  .s("supersaw")
  .scale(chords)
  .lpf(400)
  .pan(sine.range(0.35,.65).slow(2))
  .lpenv(2)
  .echo(8, 1/16, .8)
  .postgain(1)

$drums: 
stack(
  s("bd:4").struct("<x x x [x ~ x? x?]>*4")
 .duck("2").duckattack(.2).duckdepth(.8),
  //s("[~ sd:4]!2").room(.2).postgain(.4),
  s("shaker_small:0!16").gain(1.6).room(0.1).attack(rand.range(0.1, 0.3))
)

$pads: 
  s("gm_rock_organ")
  .n("0,2,4".sub(7))
  .scale(chords)
  .lpf(2000)
  .detune(.3)
  .room(1.2)
  .penv(.8)
  .postgain(1.4)
  .o(2)


$: //n("<b>")
  s("<numbers:8 numbers:7 numbers:6 numbers:5 numbers:4 numbers:3 numbers:2 numbers:1 numbers:0>")
  .o(2)
  .room(.6)
  .pan(sine.range(0.45, 0.55).slow(2))`
  ,
    artist: "",
    type: "Original",
    description: "",
    url: "/strudelrepl/track1",
    title: "Track #1"
 
    }
}