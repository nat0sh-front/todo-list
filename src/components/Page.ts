export interface IPage {
    formContainer: HTMLElement;
    todosContainer: HTMLElement[];
}

export class Page implements IPage {
    protected _formContainer: HTMLElement;
    protected _todosContainer: HTMLElement;

    constructor(container: HTMLElement) {
        this._formContainer = container.querySelector('.todos__form-container') as HTMLElement;
        this._todosContainer = container.querySelector('.todos__list') as HTMLElement;
    }

    set formContainer(formElement: HTMLFormElement) {
        if(formElement) {
            this._formContainer.replaceChildren(formElement);
        } else {
            this._formContainer.innerHTML = '';
        }
    }

    set todosContainer(items: HTMLElement[]) {
        this._todosContainer.replaceChildren(...items)
    }
}