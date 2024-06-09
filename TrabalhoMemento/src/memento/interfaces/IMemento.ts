import EBluetoothStatus from "../../settings/Enum/EBluetoothStatus"
import EDataStatus from "../../settings/Enum/EDataStatus"
import EScreenMode from "../../settings/Enum/EScreenMode"
import EWiFiStatus from "../../settings/Enum/EWiFiStatus"

export default interface IMemento{
    getVolume() : number
    getBright() : number
    getWifi(): EWiFiStatus
    getBt(): EBluetoothStatus
    getData(): EDataStatus
    getScreenMode(): EScreenMode
    print() : string
}