import { Todo } from "./todo";

export class TodoView {

  todoSection = document.querySelector("main");

  constructor() {
    this.buildView();
  }

  buildView() {
    this.createAddTodoButton();
    //let inputs = this.createTodoFormInputs();
    //this.createTodoForm(inputs);
  }

  createAddTodoButton() {
    let todoButton = document.createElement("button");
    todoButton.classList.add("addButton", "addTodoButton");
    this.todoSection.appendChild(todoButton);
    todoButton.addEventListener('click', () => {
      this.todoForm();
    });
  }

  todoForm() {
    let inputs = this.createTodoFormInputs();
    let form = this.createTodoForm(inputs);
    this.todoSection.appendChild(form);
  }

  createTodoFormInputs() {
    let titleInput = document.createElement("input");
    let descriptionInput = document.createElement("input");
    let dueDateInput = document.createElement("input");
    let priorityInput = document.createElement("input");
    let notesInput = document.createElement("input");
    return [
      titleInput,
      descriptionInput,
      dueDateInput,
      priorityInput,
      notesInput,
    ]

  }

  createTodoForm(inputs: Array<HTMLElement>) {
    let todoForm = document.createElement("form");
    todoForm.classList.add("todoForm");
    for (let input of inputs) {
      todoForm.appendChild(input);
    }
    let okButton = document.createElement("button");
    okButton.type = "button";
    okButton.addEventListener('click', () => { this.saveTodo });
    todoForm.appendChild(okButton);

    return todoForm;
  }

  saveTodo() {
    const formData = new FormData(document.querySelector('form'))
    for (var pair of formData.fromEntries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
  }

    createTodo() {
    }

    appendTodo(todo: Todo) {
      let todoStringified = todo.toString();
      let todoElement = document.createElement('div');
      todoElement.innerHTML = todoStringified;
      this.todoSection.appendChild(todoElement);
    }

  }
