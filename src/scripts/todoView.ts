import { Todo } from "./todo";
import { TodoForm } from "./todoForm";
import { TodoManager } from "./todoManager";

export class TodoView {

  main = document.querySelector("main");
  todoForm: TodoForm;
  todoManager: TodoManager;

  constructor() {
    this.buildView();
  }

  private buildView() {
    this.todoForm = new TodoForm(this.main, this.saveTodo);
    this.createAddTodoButton();
  }

  private createAddTodoButton() {
    let todoButton = document.createElement("button");
    todoButton.classList.add("addButton", "addTodoButton");
    this.main.appendChild(todoButton);
    todoButton.addEventListener('click', () => {
      this.todoForm.renderTodoForm();
    });
  }

  private saveTodo() {
    const formData: HTMLFormElement = document.querySelector("form");
    console.log(formData.children);
    let todoValues = [];
    let child: any
    for (child of formData.children) {
      if (child.localName !== "button" && child.localName !== "label") {
        console.log(child.value);
        todoValues.push(child.value);
      }
    }
    let todo = TodoManager.newTodo.apply(null, todoValues);
    this.appendTodo(todo);
  }

  appendTodo(todo) {};

  private createTodo() {
  }

}
