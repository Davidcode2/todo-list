import { Todo } from "./todo";
import { TodoView } from "./todoView";

export class TodoManager {

  constructor(private todoView: TodoView) { }

  static newTodo(title: string, description: string, dueDate: Date, priority: number, notes: string) {
    let todo = new Todo(title, description, dueDate, priority, notes)
    return todo;
  }

}
