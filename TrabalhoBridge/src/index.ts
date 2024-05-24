import PlayStation from "./consoles/PlayStation";
import XBox from "./consoles/XBox";
import IConsole from "./consoles/interfaces/IConsole";
import AdvancedPlay from "./gameplay/AdvancedPlay";
import Play from "./gameplay/Play";

function play(console: IConsole){
    const play = new Play(console)
    play.playing()
    play.result()
}

function advancedPlay(console: IConsole){
    const advancedPlay = new AdvancedPlay(console)
    advancedPlay.playing()
    advancedPlay.result()
    advancedPlay.challenge()
}

play(new PlayStation())
play(new XBox())

console.log("\n")

advancedPlay(new PlayStation())
advancedPlay(new XBox())