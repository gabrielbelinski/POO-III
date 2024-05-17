import ICorreiosTransport from "../correios/interfaces/ICorreiosTransport";
import Transportadora from "../transportadora/Transportadora";
import Rastreio from "../utils/Rastreio";

export default class TransportadoraAdapter implements ICorreiosTransport{

    constructor(private transportadora : Transportadora){
    }

    getRastreio(): Rastreio {
        return new Rastreio()
    }
    sendCorreios(): void {
        this.transportadora.send()
    }
    receiveCorreios(): void {
        this.transportadora.receive()
    }

}