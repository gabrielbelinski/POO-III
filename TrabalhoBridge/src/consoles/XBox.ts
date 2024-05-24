import IConsole from "./interfaces/IConsole";

export default class XBox implements IConsole{

    constructor(){
        this.configureGame()
        console.log("XBox: Console configurado!")
    }
    configureGame(): void {
        this.authToken()
        console.log("XBox: Configurando o jogo...")

    }
    authToken(): void {
        console.log("XBox: Autorizando o console...")
    }

}