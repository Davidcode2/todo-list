import { Project } from "./project";

let projectTabArea = document.querySelector(".projectTabs");
let content = document.querySelector("header>div");
let addProjectButton = createAddProjectButton();

addProjectButton.addEventListener('click', () => {
  let tab = createProjectTab();
  projectTabArea.appendChild(tab);
  console.log("woot");
});

function createProjectTabDeleteButton(tab: HTMLElement) {
  let deleteProjectTabButton = document.createElement('button');
  deleteProjectTabButton.classList.add("deleteProjectTabButton");
  deleteProjectTabButton.addEventListener('click', () => deleteProjectTab(tab));
  return deleteProjectTabButton;
}

content.appendChild(addProjectButton);

function createAddProjectButton() {
  let addProjectButton = document.createElement("button");
  addProjectButton.classList.add("projectAddButton");
  return addProjectButton;
}

function createProjectTab() {
  let project = new Project(Project.makeDefaultProjectName());
  let tab = document.createElement("div");
  tab.classList.add('tab');
  tab.innerHTML = project.Title;
  tab.addEventListener('click', () => switchTo(tab));
  tab.appendChild(createProjectTabDeleteButton(tab));
  return tab;
}

function switchTo(tab: HTMLElement) {
  Project.load(tab.dataset.indexNumber);
}

function deleteProjectTab(tab: HTMLElement) {
  console.log("deleting");
  projectTabArea.removeChild(tab);
}

