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

}
