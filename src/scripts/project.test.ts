import { Project } from './project';
import { Todo } from './todo';

test("create new project", () => {
  expect(new Project("someproject")).toEqual({ title: "someproject", todos: [] })
});

test("add todo", () => {
  let myProject = new Project("main Todos");
  let myTodo = new Todo("clean house");
  myProject.addTodo(myTodo);
  expect(myProject).toEqual({
    title: "main Todos",
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
  let myProjectTwo = new Project("secondary");
  let myTodo = new Todo("clean house");
  myProjectTwo.addTodo(myTodo);
  myProjectTwo.removeTodo(myTodo);
  expect(myProjectTwo).toEqual({ title: "secondary", todos: [] });
});
