import TransportadoraAdapter from "./adapters/TransportadoraAdapter";
import Correios from "./correios/Correios";
import ICorreiosTransport from "./correios/interfaces/ICorreiosTransport";
import Transportadora from "./transportadora/Transportadora";

const pacoteC : ICorreiosTransport = new Correios()
pacoteC.sendCorreios()
pacoteC.receiveCorreios()

const pacoteT : ICorreiosTransport = new TransportadoraAdapter(new Transportadora())
pacoteT.sendCorreios()
pacoteT.receiveCorreios()
