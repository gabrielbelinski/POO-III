import IVehicle from "./interfaces/IVehicle";

export default class Car implements IVehicle{

    startRoute(): void {
        this.getCargo()
        console.log("Carro: iniciando o trajeto...")
    }
    getCargo(): void {
        console.log("Carro: passageiros embarcados!")
    }
    
}