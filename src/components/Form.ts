export interface IForm {
    buttonText: string;
    placehodler: string;
    setHandler(handleFormSubmit: Function): void;
    render(): HTMLFormElement;
    setValue(value: string): void;
    getValue(): string;
    clearValue(): void;
}

export interface IFormConstructor {
    new (template: HTMLTemplateElement): IForm;
}

export class Form implements IForm {
    protected formElement: HTMLFormElement;
    protected inputElement: HTMLInputElement;
    protected handleFormSubmit: Function;
    protected submitButton: HTMLButtonElement;

    constructor(template: HTMLTemplateElement) {
        this.formElement = template.content.querySelector('.todo-form') as HTMLFormElement;
        this.inputElement = this.formElement.querySelector('.todo-form__input') as HTMLInputElement;
        this.submitButton = this.formElement.querySelector('.todo-form__submit-btn') as HTMLButtonElement;
        this.formElement.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmit(this.inputElement.value);
        })
    }

    setHandler(handleFormSubmit: Function) {
        this.handleFormSubmit = handleFormSubmit;
    }

    render() {
        return this.formElement;
    }

    setValue(value: string) {
        this.inputElement.value = value;
    }

    getValue() {
        return this.inputElement.value;
    }

    clearValue() {
        this.formElement.reset();
    }
    
    set placehodler(data: string) {
        this.inputElement.placeholder = data;
    }

    set buttonText(data: string) {
        this.submitButton.textContent = data;
    }
}