import IPlatform from "./interfaces/IPlatform";

export default class TwitchTV implements IPlatform{

    constructor(){
        this.configureRMTP()
        console.log("Twitch: Plataforma Configurada")
    }

    configureRMTP(): void {
        this.authToken()
        console.log("Twitch: Configurando Broadcasting")
    }
    authToken(): void {
        console.log("Twitch: Autorizando a plataforma")
    }

}