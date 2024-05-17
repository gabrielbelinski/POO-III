import Rastreio from "../utils/Rastreio";
import ICorreiosTransport from "./interfaces/ICorreiosTransport";

export default class Correios implements ICorreiosTransport{

    private rastreio : Rastreio

    getRastreio(): Rastreio {
        return new Rastreio
    }
    sendCorreios(): void {
        this.rastreio = this.getRastreio()
        console.log("Enviando pacote via Sedex...")
        console.log("Código de rastreio: " + this.rastreio.codigo)
    }
    receiveCorreios(): void {
        this.rastreio = this.getRastreio()
        console.log("Pacote " + this.rastreio.codigo + " entregue via Sedex")
    }

}