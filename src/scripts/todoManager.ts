import { Project } from "./project";
import { Todo } from "./todo";

export abstract class TodoManager {

  static selectedProject: Project;

  static newTodo(title: string, description: string, dueDate: Date, priority: number, notes: string) {
    let todo = new Todo(title, description, dueDate, priority, notes)
    TodoManager.selectedProject.addTodo(todo);
    return todo;
  }

  static set SelectedProject(project: Project) {
    console.log(project);
    TodoManager.selectedProject = project;
  }

  static formatTodo(todo: Todo) {
    let todoElement = document.createElement('div');
    todoElement.classList.add("todoElement", "blur");
    todoElement.dataset.id = String(todo.Id);
    for (let entry in todo) {
      let span = document.createElement("span");
      if (entry === "title") {
        span.innerHTML = todo[entry];
        span.classList.add("todoTitle");
        todoElement.appendChild(span);
      } else if (entry === "dueDate") {
        span.classList.add("dueDateKey", "todoKey");
        span.innerHTML = `${entry}:`;
        todoElement.appendChild(span);
        let propertySpan = document.createElement("span");
        propertySpan.innerHTML = String(todo[entry]);
        todoElement.appendChild(propertySpan);
      } else if (entry === "description") {
        span.innerHTML = `${entry}:`;
        span.classList.add("descriptionKey", "todoKey");
        todoElement.appendChild(span);
        let propertySpan = document.createElement("span");
        propertySpan.innerHTML = todo[entry];
        todoElement.appendChild(propertySpan);
      } else if (entry === "notes") {
        span.innerHTML = `${entry}:`;
        span.classList.add("notesKey", "todoKey");
        todoElement.appendChild(span);
        let propertySpan = document.createElement("span");
        propertySpan.innerHTML = todo[entry];
        todoElement.appendChild(propertySpan);
      } 
      console.log(entry);
    }
    return todoElement;
  }



}
