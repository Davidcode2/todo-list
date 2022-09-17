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
      if (this.inputObjects[i].name === "dueDate") {
        inputsVariables.push(label);
      }
      let input = this.createInput(this.inputObjects[i]);
      inputsVariables.push(input);
    }
    return inputsVariables;
  }

  private createInput(inputObj: { name: string, type: string }) {
    if (inputObj.type === "textarea") {
      this[`{inputNames[i]}`] = document.createElement("textarea");
    } else {
      console.log(this[`{inputNames[i]}`]);
      this[`{inputNames[i]}`] = document.createElement("input");
      this[`{inputNames[i]}`].type = inputObj.type;
    }
    if (inputObj.name === "title") {
      this[`{inputNames[i]}`].classList.add("titleInput");
      this[`{inputNames[i]}`].value = "Task";
    }
    if (inputObj.name === "priority") {
      this[`{inputNames[i]}`].max = 3;
      this[`{inputNames[i]}`].min = 0;
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
    let todoValues = [];
    let child: any
    for (child of formData.children) {
      if (child.localName !== "button" && child.localName !== "label") {
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

  private check(todoElement: HTMLElement) {
    todoElement.classList.toggle("fadeOut");
    todoElement.classList.toggle("todoElementShadow");
    TodoManager.updateTodo(Number(todoElement.dataset.id));
  }

  private setChecked(checkbox: HTMLInputElement, todo: Todo, todoElement: HTMLElement) {
    if (todo.Checked) {
      this.check(todoElement);
      checkbox.checked = true
    }
  }

  private createCheckTodo(todo: Todo, todoElement: HTMLElement) {
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("checkbox");
    checkBox.addEventListener('change', () => {
      todo.Checked ? todo.Checked = false : todo.Checked = true;
      todoElement.firstElementChild.classList.toggle("crossedOut");
      this.check(todoElement);
    });
    return checkBox;
  }

  public formatTodo(todo: Todo) {
    let todoElement = document.createElement('div');
    todoElement.classList.add("todoElement", "blur", "todoElementShadow");
    todoElement.dataset.id = String(todo?.Id);
    for (let adder in addFunctions) {
      let element = addFunctions[adder](todo);
      todoElement.appendChild(element);
    }
    let checkbox = this.createCheckTodo(todo, todoElement);
    todoElement.appendChild(checkbox);
    this.setChecked(checkbox, todo, todoElement);
    return todoElement;
  }
}
