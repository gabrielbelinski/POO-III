import ILandVehicle from "./interfaces/ILandVehicle";

export default class Scooter implements ILandVehicle{
    startRoute(): void {
        this.getCargo()
        console.log("Scooter: iniciando o trajeto...")
    }
    getCargo(): void {
       console.log("Scooter: encomenda retirada!");
    }

}