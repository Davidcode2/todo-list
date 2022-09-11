import { Project } from "./project";
import { ProjectManager } from "./projectManager"
import { TodoManager } from "./todoManager";


export class ProjectTabView {

  constructor(private projectManager: ProjectManager) {
    this.buildView();
  }

  projectTabArea = document.querySelector(".projectTabs");
  projectHeader = document.querySelector("header>div");

  buildView() {
    let projectAddButton = this.createAddProjectButton();
    let tab = this.createProjectTab(0);
    this.projectTabArea.appendChild(tab);
    this.addProjectButton(projectAddButton);
  }

  addProjectButton(projectAddButton: HTMLElement) {
    projectAddButton.addEventListener('click', () => {
      let tab = this.createTitledProjectTab();
      this.projectTabArea.appendChild(tab);
    });
  }

  createProjectTabDeleteButton(tab: HTMLElement) {
    let deleteProjectTabButton = document.createElement('button');
    deleteProjectTabButton.classList.add("deleteProjectTabButton");
    deleteProjectTabButton.addEventListener('click', () => this.deleteProjectTab(tab));
    return deleteProjectTabButton;
  }

  createAddProjectButton() {
    let addProjectButton = document.createElement("button");
    addProjectButton.classList.add("addButton");
    this.projectHeader.appendChild(addProjectButton);
    return addProjectButton;
  }

  createProjectTab(tabNumber: number) {
    let project = this.projectManager.projects[tabNumber];
    let tab = document.createElement("div");
    tab.dataset.indexNumber = String(project.Id);
    tab.classList.add('tab');
    tab.innerHTML = project.Title;
    tab.addEventListener('click', () => this.switchTo(tab));
    tab.appendChild(this.createProjectTabDeleteButton(tab));
    return tab;
  }

  createTitledProjectTab() {
    let project = this.projectManager.createProject();
    project.Title = project.makeDefaultProjectName();
    let tab = document.createElement("div");
    tab.dataset.indexNumber = String(project.Id);
    tab.classList.add('tab');
    tab.innerHTML = project.Title;
    tab.addEventListener('click', () => this.switchTo(tab));
    tab.appendChild(this.createProjectTabDeleteButton(tab));
    return tab;
  }

  updateProjectTab(tab: HTMLElement) {
    let project = this.projectManager.load(Number(tab.dataset.indexNumber))
    tab.innerHTML = project.Title;
  }

  removeAllChildren(element: Element) {
    while (element.lastChild) {
        element.removeChild(element.lastChild);
    }
  }

  switchTo(tab: HTMLElement) {
    let project: Project = this.projectManager.load(Number(tab.dataset.indexNumber));
    TodoManager.SelectedProject = project;
    let todoDiv = document.querySelector('.todoContainer');
    this.removeAllChildren(todoDiv);
    for (let todo of project.Todos) {
      let todoElement = TodoManager.formatTodo(todo);
      todoDiv.appendChild(todoElement);

    }
  }

  deleteProjectTab(tab: HTMLElement) {
    console.log("deleting");
    this.projectTabArea.removeChild(tab);
  }

}
