import { Todo } from "./todo";
import { TodoManager } from "./todoManager";

export class TodoForm {

  constructor(private todoSection: Element, private saveTodo: Function) { }

  private form: HTMLFormElement;
  private formSection = document.querySelector("main");

  private inputObjects = [
    { name: "title", type: "text" },
    { name: "description", type: "textarea" },
    { name: "dueDate", type: "Date" },
    { name: "priority", type: "number" },
    { name: "notes", type: "textarea" }
  ];

  public renderTodoForm() {
    let inputs = this.createTodoFormInputsWithLabels();
    this.form = this.createTodoForm(inputs);
    this.form.classList.add("blur");
    this.formSection.appendChild(this.form);
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

  private createInput(inputObj: {name: string,type: string}) {
    if (inputObj.type === "textarea") {
      this[`{inputNames[i]}`] = document.createElement("textarea");
    } else {
      this[`{inputNames[i]}`] = document.createElement("input");
      this[`{inputNames[i]}`].type = inputObj.type;
    }
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
    okButton.addEventListener('click', () => {
      this.saveTodo()
      this.formSection.removeChild(this.form);
    });
    todoForm.appendChild(okButton);
    return todoForm;
  }
  
  public appendTodo(todo: Todo) {
    let todoContainer = TodoManager.formatTodo(todo);
    this.todoSection.appendChild(todoContainer);
  }
}
