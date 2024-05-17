import Rastreio from "../../utils/Rastreio"

export default interface ICorreiosTransport{
    getRastreio() : Rastreio
    sendCorreios() : void
    receiveCorreios() : void
}