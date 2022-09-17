import { TodoForm } from "./todoForm";
import { TodoManager } from "./todoManager";

export class TodoView {

  todoContainer = document.querySelector(".todoContainer");
  main = document.querySelector("main");
  todoForm: TodoForm;
  todoManager: TodoManager;

  constructor() {
    this.buildView();
  }

  private buildView() {
    this.todoForm = new TodoForm(this.todoContainer);
    this.createAddTodoButton();
    document.querySelector("main").appendChild(this.todoContainer);
    this.todoContainer.classList.add("todoContainer");
  }

  private createAddTodoButton() {
    let todoButton = document.createElement("button");
    todoButton.classList.add("addButton", "addTodoButton", "blur");
    this.main.appendChild(todoButton);
    todoButton.addEventListener('click', () => {
      this.todoForm.renderTodoForm();
    });
  }

}
