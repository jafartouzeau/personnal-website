export type StrudelMusicType = {    
    artist: string;
    type: string; //remix or original
    description: string;
    url: string,
    title: string,
    code: string;
}

export const strudelData: Record<string, StrudelMusicType> = {
    "veridisquo" : {
        artist: "Daft Punk",
        type: "Remix",
        description: "",
        url: "/strudelrepl/veridisquo",
        title: "Veridis Quo",
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
.o(3)
`
    }, 
    "anewerror":{
      artist:"Moderat",
      type:"Remix",
      description:"",
      url:"",
      title:"A new error",
      code: 
`setCpm(112/4)
const chords = "<f:major a:major d:minor e:minor>/2"

$pad: note("<[c, f, a]@0.75 [c, f, b]@0.25 [c, f, c4] [c, f, a] [c, e, a] >/2")
.sound("sawtooth")
.struct("<x>*3")
.lpf(2000)
.room(1)
.postgain(.4)
.penv(2)
.decay(2)
.attack(.2)
.crush("<16>")
.o(6)

_$lead1: note("<[f a c]!6 [f b c]!2 [f c4 c]!8 [f a c]!8 [e a c]!8>*4")
.sound("pulse")
.lpf(sine.range(4000,800).slow(8))
.pan(sine.range(.2,.8).slow(8))
.penv(.4)
.room(.5)
.lpenv(2)
.postgain(1.2)
.decay(.3)
.add(note(12))
.o(6)

$drum: stack(
s("sbd!4").duck("4:3").duckattack(.5).duckdepth(.9),
s("[~ sd:4]!2")
).gain(.7)

$bass: note("<f a d e>/2".sub(24))
.struct("x*12")
.s("supersaw")
.lpf(800)
.lpenv(2)
.gain(.9)
.distort(2)
.decay(.2)
.o(6)

_$lead2: note("<[c a2]!8 [f2 c]!4 [e2 a2]!4>*2".add(12))
.struct("x*12")
.sound("saw")
.lpenv(8)
.penv(.1)
.add(note("<0!8 12!2 0 -12 12 24 24 12>*2"))
.postgain(3)
.lpf(1000)
.decay(.5)
.o(4,6)

_$: s("circuitsdrumtracks_sd")
.struct("<-!3 x>*4")
.duck("6").duckattack(.5).duckdepth(1)

`
    },
    "track1":{
        artist: "",
        type: "Original",
        description: "",
        url: "/strudelrepl/track1",
        title: "Track #1",
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
  .pan(sine.range(0.45, 0.55).slow(2))
`
    },
    "track2":{
        artist: "",
        type: "Original",
        description: "https://www.youtube.com/watch?v=2-EzQylIMvk&list=RD2-EzQylIMvk&start_radio=1",
        url: "",
        title: "Track #2",
        code:
`setCpm(120/4)

const currentScale = "g:minor"

$bass: 
   n("<5@4 4@4 6@0.5 7@0.5 0@1.5 0@1.5 0@1.5 0@2.5>*8".sub(14))
  .scale(currentScale)
  .s("<supersaw [supersaw, triangle]>")
  //.lpf(400)
  .seg(24)//16
  .lpf(tri.range(100,800))
  .lpenv(tri.range(0,2))
  .distort(2)
  .room(.1)
  .scope()

$drum: stack(
  s("sbd!4"),
  s("[- hh:1]!4").decay(.25)
)
`
    }
}