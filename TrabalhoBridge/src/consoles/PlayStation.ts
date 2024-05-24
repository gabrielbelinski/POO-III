import IConsole from "./interfaces/IConsole";

export default class PlayStation implements IConsole{

    constructor(){
        this.configureGame()
        console.log("PlayStation: Console configurado!")
    }
    configureGame(): void {
        this.authToken()
        console.log("PlayStation: Configurando o jogo...")

    }
    authToken(): void {
        console.log("PlayStation: Autorizando o console...")
    }

}