import Rastreio from "../../utils/Rastreio";

export default interface ITransportadoraTransport{
    getRastreio() : Rastreio
    send() : void
    receive() : void
}