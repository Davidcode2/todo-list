import './css/style.css';
import { Project } from './scripts/project';
import { Todo } from './scripts/todo';
import './scripts/projectView';
import { ProjectTabView } from "./scripts/projectView";
import { ProjectManager } from './scripts/projectManager';
import { TodoView } from './scripts/todoView';

let main = document.querySelector("main");
let content = document.createElement("div");
content.id = "content";

main.appendChild(content);
content.innerHTML = "This is inside of content";

let projectManager = new ProjectManager();
new ProjectTabView(projectManager);
new TodoView();

let myProject = new Project();
let myTodo = new Todo("mop floor");
myProject.addTodo(myTodo);

console.log(myProject.Todos);

console.log("yay");
