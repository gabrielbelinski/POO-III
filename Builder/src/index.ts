import VehicleBuilder from "./builders/VehicleBuilder";
import Director from "./builders/directors/Director";
import Vehicle from "./products/Vehicle";

const builder : VehicleBuilder = new VehicleBuilder()
const director : Director = new Director(builder)

director.constructSedanCar()
const sedan  : Vehicle = builder.getVehicle()
console.log("Criando veiculo...")
console.log("Tipo: " + sedan.vehicleType)
console.log("Potência: " + sedan.engine.power)
console.log("Transmissão: " + sedan.transmission)
console.log("Assentos: " + sedan.seats)
console.log("Rodas: " + sedan.wheels.length + " - Aro: " + sedan.wheels[0].rim)
console.log("===================")
director.constructTruck()
const truck : Vehicle = builder.getVehicle()
console.log("Criando veiculo...")
console.log("Tipo: " + truck.vehicleType)
console.log("Potência: " + truck.engine.power)
console.log("Transmissão: " + truck.transmission)
console.log("Assentos: " + truck.seats)
console.log("Rodas: " + truck.wheels.length + " - Aro: " + truck.wheels[0].rim)

