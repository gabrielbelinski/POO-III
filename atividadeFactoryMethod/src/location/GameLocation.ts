import Location from "./Location";
import Game from "./type/Game";
import IItem from "./type/interfaces/IItem";

export default class GameLocation extends Location{

    protected createItem(): IItem {
        return new Game()
    }
}