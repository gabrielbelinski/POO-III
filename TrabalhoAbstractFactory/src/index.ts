import AiqfomeDelivery from "./deliveryapp/AiqfomeDelivery"
import IFoodDelivery from "./deliveryapp/IFoodDelivery"
import IDeliveryFactory from "./deliveryapp/interfaces/IDeliveryFactory"
import Client from "./clients/Client"

declare var process 
const userInputs = process.argv
let factory : IDeliveryFactory

if(userInputs.includes("aiqfome")){
    factory = new AiqfomeDelivery()
}
else if(userInputs.includes("ifood")){
    factory = new IFoodDelivery()
}
else{
    console.log("Opção inválida, selecione entre 'aiqfome' ou 'ifood'!")
}

if(factory){
    const client = new Client(factory)
    client.startDelivery()
}

