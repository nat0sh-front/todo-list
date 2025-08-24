import "./styles/styles.css"
import { todos } from './utils/constants'
import { Item } from './components/Item'
import { Form } from './components/Form'
import { TodoModel } from './components/TodoModel'
import { Page } from './components/Page'
import { TodoPresenter } from './components/TodoPresenter'

const contentElement = document.querySelector('.content') as HTMLElement;

const todosArray = new TodoModel();
todosArray.items = todos;

const page = new Page(contentElement);

const presenter = new TodoPresenter(todosArray, Item, page, Form);

presenter.init();
presenter.renderView();







