import { IItem } from '../types/index'

export interface IViewItem {
    id: number;
    name: string;
    render(item: IItem): HTMLElement;
    setCopyHandler(handleCopyItem: Function): void;
    setDeleteHandler(handleDeleteItem: Function): void;
}

export interface IViewItemConstructor {
    new (template: HTMLTemplateElement):IViewItem;
}

export class Item implements IViewItem {
    protected itemElement: HTMLElement;
    protected titleElement: HTMLElement;
    protected _id: number;
    protected copyButton: HTMLButtonElement;
    protected handleCopyItem: Function;
    protected deleteButton: HTMLButtonElement;
    protected handleDeleteItem: Function;

    constructor(template: HTMLTemplateElement) {
        this.itemElement = template.content.querySelector('.todo-item').cloneNode(true) as HTMLElement;
        this.titleElement = this.itemElement.querySelector('.todo-item__text');
        this.copyButton = this.itemElement.querySelector('.todo-item__copy');
        this.deleteButton = this.itemElement.querySelector('.todo-item__del');
    }

    set id(value: number) {
        this._id = value;
    }

    get id() {
        return this._id;
    }

    set name(value: string) {
        this.titleElement.textContent = value;
    }

    get name() {
        return this.titleElement.textContent || null;
    }

    setCopyHandler(handleCopyItem: Function) {
        this.handleCopyItem = handleCopyItem;
        this.copyButton.addEventListener('click', (e) => {
            this.handleCopyItem(this);
        })
    }

    setDeleteHandler(handleDeleteItem: Function) {
        this.handleDeleteItem = handleDeleteItem;
        this.deleteButton.addEventListener('click', (e) => {
            this.handleDeleteItem(this);
        })
    }

    render(item: IItem) {
        this.titleElement.textContent = item.name;
        this._id = item.id;
        return this.itemElement;
    }
}