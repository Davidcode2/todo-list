import './css/style.css';
import { Project } from './scripts/project';
import { Todo } from './scripts/todo';
import './scripts/projectView';

let body = document.querySelector("body");
let content = document.createElement("div");
content.id = "content";

body.appendChild(content);
content.innerHTML = "This is inside of content";

let myProject = new Project("testproject");
let myTodo = new Todo("mop floor");
myProject.addTodo(myTodo);

console.log(myProject.Todos);

console.log("yay");
