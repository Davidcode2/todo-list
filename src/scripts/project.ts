import { Todo } from './todo';

export class Project {

  private todos: Todo[] = [];
  private title: string;

  constructor(title: string) {
    this.title = title;
  }

  public addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  public removeTodo(todo: Todo) {
    let indexOfTodo: number = this.todos.indexOf(todo);
    this.todos.splice(indexOfTodo, 1);
  }

  get Todos() {
    return this.todos;
  }
}
