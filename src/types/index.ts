export interface IItem {
    id: number;
    name: string;
}

export interface ITodoModel {
    items: IItem[];
    addItem: (name: string) => IItem;
    removeItem: (id: number) => void;
    getItem: (id: number) => IItem;
}

