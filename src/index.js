import './styles/style.css';
import './scripts/project.ts';
import './scripts/todo.ts';

let body = document.querySelector("body");
let content = document.createElement("div");
content.id = "content";

body.appendChild(content);
content.innerHTML = "This is inside of content";



console.log("yay");
