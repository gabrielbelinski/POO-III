import PhoneSettingsCaretaker from "./caretaker/PhoneSettingsCaretaker";
import EBluetoothStatus from "./settings/Enum/EBluetoothStatus";
import EDataStatus from "./settings/Enum/EDataStatus";
import EScreenMode from "./settings/Enum/EScreenMode";
import EWiFiStatus from "./settings/Enum/EWiFiStatus";
import PhoneSettings from "./settings/PhoneSettings";

const phoneSettings : PhoneSettings = new PhoneSettings()
const caretaker : PhoneSettingsCaretaker = new PhoneSettingsCaretaker(phoneSettings)

caretaker.saveSnapshot()

phoneSettings.volume = 0
phoneSettings.bright = 75
phoneSettings.wifi = EWiFiStatus.ON
phoneSettings.bt = EBluetoothStatus.OFF
phoneSettings.data = EDataStatus.OFF
phoneSettings.screenMode = EScreenMode.DARK

caretaker.saveSnapshot()

phoneSettings.volume = 50
phoneSettings.bright = 85
phoneSettings.wifi = EWiFiStatus.OFF
phoneSettings.bt = EBluetoothStatus.ON
phoneSettings.data = EDataStatus.ON
phoneSettings.screenMode = EScreenMode.LIGHT

caretaker.saveSnapshot()

phoneSettings.volume = 0
phoneSettings.bright = 0
phoneSettings.wifi = EWiFiStatus.OFF
phoneSettings.bt = EBluetoothStatus.OFF
phoneSettings.data = EDataStatus.OFF
phoneSettings.screenMode = EScreenMode.DARK

//caretaker.saveSnapshot()

console.log("\nConfigurações atuais: " + phoneSettings.print())
caretaker.restoreSnapshot()
//caretaker.restoreSnapshot()
//caretaker.restoreSnapshot()
//caretaker.restoreSnapshot()
//caretaker.showSnapshots()
console.log("\nConfigurações atuais: " + phoneSettings.print())









