import Rastreio from "../utils/Rastreio";
import ITransportadoraTransport from "./interfaces/ITransportadoraTransport";

export default class Transportadora implements ITransportadoraTransport{

    private rastreio : Rastreio

    getRastreio(): Rastreio {
        return new Rastreio
    }
    send(): void {
        this.rastreio = this.getRastreio()
        console.log("Enviando pacote via Transportadora...")
        console.log("Código de rastreio: " + this.rastreio.codigo)
    }
    receive(): void {
        this.rastreio = this.getRastreio()
        console.log("Pacote " + this.rastreio.codigo + " entregue via Transportadora")
    }

}