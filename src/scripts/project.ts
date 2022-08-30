import { Todo } from './todo';

export class Project {

  private todos: Todo[] = [];

  public addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  public removeTodo(todo: Todo) {
    let indexOfTodo: number = this.todos.indexOf(todo);
    this.todos.splice(indexOfTodo, 1);
  }

  public createTodo(title: string) {
    let todo = new Todo(title);
    return todo;
  }

  get Todos() {
    return this.todos;
  }
}
