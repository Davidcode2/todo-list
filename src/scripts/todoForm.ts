import { Todo } from "./todo";
import { TodoManager } from "./todoManager";
import { addFunctions } from "./todoElements";

export class TodoForm {

  constructor(private todoSection: Element) { }

  private form: HTMLFormElement;
  private formSection = document.querySelector("main");
  private formRendered = false;

  private inputObjects = [
    { name: "title", type: "text" },
    { name: "description", type: "textarea" },
    { name: "dueDate", type: "Date" },
    { name: "priority", type: "number" },
    { name: "notes", type: "textarea" }
  ];

  public renderTodoForm() {
    if (!this.formRendered) {
      let inputs = this.createTodoFormInputsWithLabels();
      this.form = this.createTodoForm(inputs);
      this.form.classList.add("blur");
      this.formSection.appendChild(this.form);
      this.formRendered = true;
    }
  }

  private createTodoFormInputsWithLabels() {
    let inputsVariables = []
    for (let i = 0; i < this.inputObjects.length; i++) {
      let label = this.createLabel(this.inputObjects[i].name);
      inputsVariables.push(label);
      let input = this.createInput(this.inputObjects[i]);
      inputsVariables.push(input);
    }
    return inputsVariables;
  }

  private createInput(inputObj: { name: string, type: string }) {
    if (inputObj.type === "textarea") {
      this[`{inputNames[i]}`] = document.createElement("textarea");
    } else {
      this[`{inputNames[i]}`] = document.createElement("input");
      this[`{inputNames[i]}`].type = inputObj.type;
    }
    if (this[`{inputNames[i]}`].name === "input") {
      this[`{inputNames[i]}`].classList.add("titleInput");
    }
    this[`{inputNames[i]}`].placeholder = inputObj.name;
    return this[`{inputNames[i]}`];
  }

  private createLabel(inputName: string) {
    let tempLabel = document.createElement('label');
    tempLabel.htmlFor = inputName;
    tempLabel.innerHTML = inputName;
    return tempLabel;
  }

  private createTodoForm(inputs: Array<HTMLElement>) {
    let todoForm = document.createElement("form");
    todoForm.action = "";
    todoForm.classList.add("todoForm");
    for (let input of inputs) {
      todoForm.appendChild(input);
    }
    let okButton = document.createElement("button");
    okButton.type = "button";
    okButton.innerHTML = "save"
    okButton.classList.add("saveButton");
    okButton.addEventListener('click', () => {
      this.saveTodo()
      this.formSection.removeChild(this.form);
      this.formRendered = false;
    });
    todoForm.appendChild(okButton);
    return todoForm;
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

  public appendTodo(todo: Todo) {
    let todoContainer = this.formatTodo(todo);
    this.todoSection.appendChild(todoContainer);
  }


  private checkTodo(todoElement: HTMLElement) {
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("checkbox");
    checkBox.addEventListener('change', () => {
      todoElement.remove();
    });
    return checkBox;
  }

  public formatTodo(todo: Todo) {
    let todoElement = document.createElement('div');
    todoElement.classList.add("todoElement", "blur");
    todoElement.dataset.id = String(todo.Id);
    for (let adder in addFunctions) {
      let element = addFunctions[adder](todo);
      todoElement.appendChild(element);
    }
    let checkbox = this.checkTodo(todoElement);
    todoElement.appendChild(checkbox);
    return todoElement;
  }
}
