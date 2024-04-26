import Location from "./Location";
import Movie from "./type/Movie";
import IItem from "./type/interfaces/IItem";

export default class MovieLocation extends Location{

    protected createItem(): IItem {
        return new Movie()
    }
}