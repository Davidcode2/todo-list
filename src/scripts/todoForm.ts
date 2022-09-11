import { Todo } from "./todo";

export class TodoForm {

  constructor(private todoSection: HTMLElement, private saveTodo: Function) { }

  private form;
  private formSection = document.querySelector(".formSection");

  private inputObj = [
    { name: "title", type: "text" },
    { name: "description", type: "textarea" },
    { name: "dueDate", type: "Date" },
    { name: "priority", type: "number" },
    { name: "notes", type: "textarea" }
  ];

  public renderTodoForm() {
    let inputs = this.createTodoFormInputsWithLabels();
    this.form = this.createTodoForm(inputs);
    this.formSection.appendChild(this.form);
  }

  private createTodoFormInputsWithLabels() {
    let inputsVariables = []
    for (let i = 0; i < this.inputObj.length; i++) {
      let label = this.createLabel(this.inputObj[i].name);
      inputsVariables.push(label);
      let input = this.createInput(this.inputObj[i]);
      inputsVariables.push(input);
    }
    return inputsVariables;
  }

  private createInput(inputObj) {
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
  
  private formatTodo(todo: Todo) {
    let todoContainer = document.createElement('div');
    todoContainer.classList.add("todoElement");
    todoContainer.dataset.id = String(todo.Id);
    for (let entry in todo) {
      let span = document.createElement("span");
      if (entry === "title") {
        span.innerHTML = todo[entry];
        span.classList.add("todoTitle");
        todoContainer.appendChild(span);
      } else if (entry === "dueDate") {
        span.classList.add("dueDateKey", "todoKey");
        span.innerHTML = `${entry}:`;
        todoContainer.appendChild(span);
        let propertySpan = document.createElement("span");
        propertySpan.innerHTML = String(todo[entry]);
        todoContainer.appendChild(propertySpan);
      } else if (entry === "description") {
        span.innerHTML = `${entry}:`;
        span.classList.add("descriptionKey", "todoKey");
        todoContainer.appendChild(span);
        let propertySpan = document.createElement("span");
        propertySpan.innerHTML = todo[entry];
        todoContainer.appendChild(propertySpan);
      } else if (entry === "notes") {
        span.innerHTML = `${entry}:`;
        span.classList.add("notesKey", "todoKey");
        todoContainer.appendChild(span);
        let propertySpan = document.createElement("span");
        propertySpan.innerHTML = todo[entry];
        todoContainer.appendChild(propertySpan);
      } 
      console.log(entry);
    }
    return todoContainer;
  }

  public appendTodo(todo: Todo) {
    let todoContainer = this.formatTodo(todo);
    this.todoSection.appendChild(todoContainer);
  }
}
