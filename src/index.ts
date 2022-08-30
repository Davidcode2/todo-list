import './styles/style.css';
import { Project } from './scripts/project';
import './scripts/todo';

let body = document.querySelector("body");
let content = document.createElement("div");
content.id = "content";

body.appendChild(content);
content.innerHTML = "This is inside of content";

let myProject = new Project("testproject");
let myTodo = myProject.createTodo("transcend");
myProject.addTodo(myTodo);

console.log(myProject.Todos);

console.log("yay");
