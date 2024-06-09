import PhoneSettingsMemento from "../memento/PhoneSettingsMemento"
import IMemento from "../memento/interfaces/IMemento"
import EBluetoothStatus from "./Enum/EBluetoothStatus"
import EDataStatus from "./Enum/EDataStatus"
import EScreenMode from "./Enum/EScreenMode"
import EWiFiStatus from "./Enum/EWiFiStatus"

export default class PhoneSettings{
    private _volume: number
    private _bright: number
    private _wifi: EWiFiStatus
    private _bt: EBluetoothStatus
    private _data: EDataStatus
    private _screenMode: EScreenMode
    
    constructor(){
        this._volume = 100
        this._bright = 100
        this._wifi = EWiFiStatus.ON
        this._bt = EBluetoothStatus.ON
        this._data = EDataStatus.ON
        this._screenMode = EScreenMode.LIGHT
    }

    public get volume(): number {
        return this._volume
    }
    public set volume(value: number) {
        this._volume = value
    }

    public get bright(): number {
        return this._bright
    }
    public set bright(value: number) {
        this._bright = value
    }

    public get wifi(): EWiFiStatus {
        return this._wifi
    }
    public set wifi(value: EWiFiStatus) {
        this._wifi = value
    }

    public get bt(): EBluetoothStatus {
        return this._bt
    }
    public set bt(value: EBluetoothStatus) {
        this._bt = value
    }

    public get data(): EDataStatus {
        return this._data
    }
    public set data(value: EDataStatus) {
        this._data = value
    }

    public get screenMode(): EScreenMode {
        return this._screenMode
    }
    public set screenMode(value: EScreenMode) {
        this._screenMode = value
    }

    public save() : IMemento{
        return new PhoneSettingsMemento(this._volume, this._bright, this._wifi, this._bt, this._data, this._screenMode)
    }

    public restore(memento : any) : void{
        this._volume = memento.getVolume()
        this._bright = memento.getBright()
        this._wifi = memento.getWifi()
        this._bt = memento.getBt()
        this._data = memento.getData()
        this._screenMode = memento.getScreenMode()
    }

    public print() : string{
        return "Volume: " + this._volume + " % " + "\nBrilho: " + this._bright + " % \n" + this._wifi + " \n" + this._bt + " \n" + this._data + " \n" + this._screenMode + "\n"
    }


}