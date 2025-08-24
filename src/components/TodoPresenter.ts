import { IItem, ITodoModel } from '../types'
import { IViewItem, IViewItemConstructor } from './Item'
import { IForm } from './Form'
import { IFormConstructor } from './Form'
import { IPage } from './Page'

export class TodoPresenter {
    protected itemTemplate: HTMLTemplateElement;
    protected formTemplate: HTMLTemplateElement;
    protected addTodoForm: IForm

    constructor(protected model: ITodoModel, protected itemConstructor: IViewItemConstructor, protected pageView: IPage, protected formConstructor: IFormConstructor) {
        this.itemTemplate = document.querySelector('#todo-item-template')?.cloneNode(true) as HTMLTemplateElement;
        this.formTemplate = document.querySelector('#todo-form-template')?.cloneNode(true) as HTMLTemplateElement;
    }

    init() {
        this.addTodoForm = new this.formConstructor(this.formTemplate);
        this.addTodoForm.setHandler(this.handleFormSubmit);
        this.pageView.formContainer = this.addTodoForm.render();
    }

    handleFormSubmit = (inputValue: string) => {
        this.model.addItem(inputValue);
        this.renderView();
        this.addTodoForm.clearValue();
    }

    handleCopyItem = (item: IViewItem) => {
        const copiedItem = this.model.getItem(item.id);
        this.model.addItem(copiedItem.name);
        this.renderView();
    }

    handleDeleteItem = (item: IViewItem) => {
        this.model.removeItem(item.id);
        this.renderView();
    }

    renderView() {
        this.pageView.todosContainer = this.model.items.map(item => {
            const todo = new this.itemConstructor(this.itemTemplate);
            todo.setCopyHandler(this.handleCopyItem);
            todo.setDeleteHandler(this.handleDeleteItem);
            const itemElement = todo.render(item);
            return itemElement;
        }).reverse();
    }

}