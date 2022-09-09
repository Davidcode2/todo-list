import { Todo } from './todo';

export class Project {

  private todos: Todo[] = [];
  private title: string;
  private id: number;

  constructor() {
    this.id = Project.projectCounter();
  }

  public addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  public removeTodo(todo: Todo) {
    let indexOfTodo: number = this.todos.indexOf(todo);
    this.todos.splice(indexOfTodo, 1);
  }

  static projectCounter = (function() {
    let counter = 0;
    function count() {
      counter++;
      return counter;
    }
    return count;
  })();

  public makeDefaultProjectName() {
    return `Project ${this.id}`;
  }

  get Todos() {
    return this.todos;
  }

  get Title() {
    return this.title;
  }

  set Title(title: string) {
    this.title = title;
  }

  get Id() {
    return this.id;
  }

}
