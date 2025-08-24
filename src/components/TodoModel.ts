import { IItem, ITodoModel } from '../types/index'

export class TodoModel implements ITodoModel {
    protected _items: IItem[];

    constructor() {
        this._items = [];
    }

    set items(data: IItem[]) {
        this._items = data;
    }

    get items() {
        return this._items;
    }

    addItem(name: string) {
        const uniqueId: number = Math.max(...this._items.map(item => item.id)) + 1;
        const newItem: IItem = {id: uniqueId, name: name};
        this._items.push(newItem);
        return newItem;
    }

    removeItem(id: number) {
        this._items = this._items.filter(item => item.id !== id);
    }

    getItem(id: number) {
        return this._items.find(item => item.id === id)
    }    
}