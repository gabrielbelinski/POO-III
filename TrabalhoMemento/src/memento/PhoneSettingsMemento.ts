import EBluetoothStatus from "../settings/Enum/EBluetoothStatus"
import EDataStatus from "../settings/Enum/EDataStatus"
import EScreenMode from "../settings/Enum/EScreenMode"
import EWiFiStatus from "../settings/Enum/EWiFiStatus"
import IMemento from "./interfaces/IMemento"

export default class PhoneSettingsMemento implements IMemento{
    
    private _volume: number
    private _bright: number
    private _wifi: EWiFiStatus
    private _bt: EBluetoothStatus
    private _data: EDataStatus
    private _screenMode: EScreenMode
    private _date : string

    constructor(volume : number, bright : number, wifi : EWiFiStatus, bt : EBluetoothStatus, data : EDataStatus, screen : EScreenMode){
        this._date = new Date().toString()
        this._volume = volume
        this._bright = bright
        this._wifi = wifi
        this._bt = bt
        this._data = data
        this._screenMode = screen
    }

    getVolume(): number {
        return this._volume
    }

    getBright(): number {
        return this._bright
    }

    getWifi(): EWiFiStatus {
        return this._wifi
    }

    getBt(): EBluetoothStatus {
        return this._bt
    }

    getData(): EDataStatus {
        return this._data
    }
    
    getScreenMode(): EScreenMode {
        return this._screenMode
    }

    public print() : string{
        return "Data: " + this._date + "\nVolume: " + this._volume + " % " + "\nBrilho: " + this._bright + " % \n" + this._wifi + " \n" + this._bt + " \n" + this._data + " \n" + this._screenMode + "\n"
    }
}