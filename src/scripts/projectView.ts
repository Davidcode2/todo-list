import { Project } from "./project";

let newProjectButton = document.createElement("button");
newProjectButton.classList.add("projectAddButton");
newProjectButton.innerHTML = "+";
let content = document.querySelector("header>div");

let maincontent = document.querySelector("main");

content.appendChild(newProjectButton);

newProjectButton.addEventListener('click', () => {
  let project = new Project("myProject");
  let card = document.createElement("div");
  card.classList.add('card');
  maincontent.appendChild(card);

  console.log("woot");
});
