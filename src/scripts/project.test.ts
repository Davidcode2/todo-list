import { Project } from './project';
import { Todo } from './todo';

test("create new project", () => {
  expect(new Project()).toEqual({ id: 1, todos: [] })
});

test("add todo", () => {
  let myProject = new Project();
  let myTodo = new Todo("clean house");
  myProject.addTodo(myTodo);
  expect(myProject).toEqual({
    id: 2,
    todos: [{
      title: "clean house",
      description: undefined,
      dueDate: undefined,
      priority: 2,
      notes: undefined
    }]
  });
});

test("remove todo", () => {
  let myProjectTwo = new Project();
  let myTodo = new Todo("clean house");
  myProjectTwo.addTodo(myTodo);
  myProjectTwo.removeTodo(myTodo);
  expect(myProjectTwo).toEqual({ id: 3, todos: [] });
});