import Facebook from "./platforms/Facebook";
import TwitchTV from "./platforms/TwitchTV";
import Youtube from "./platforms/Youtube";
import IPlatform from "./platforms/interfaces/IPlatform";
import AdvancedLive from "./transmissions/AdvancedLive";
import Live from "./transmissions/Live";

function startLive(platform: IPlatform){
    console.log("Aguarde...")
    const live = new Live(platform)
    live.broadcasting()
    live.result()
}

function startAdvancedLive(platform: IPlatform){
    console.log("Aguarde...")
    const advancedLive = new AdvancedLive(platform)
    advancedLive.broadcasting()
    advancedLive.result()
    advancedLive.subtitles()
    advancedLive.comments()
}

startLive(new Youtube())
startLive(new TwitchTV())
startLive(new Facebook())

console.log("\n")

startAdvancedLive(new Youtube())
startAdvancedLive(new TwitchTV())
startAdvancedLive(new Facebook())

