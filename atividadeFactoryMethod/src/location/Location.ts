import IItem from "./type/interfaces/IItem";

export default abstract class Location{
    startItem() : void{
        const item = this.createItem()
        item.start()
    }
    protected abstract createItem() : IItem
}