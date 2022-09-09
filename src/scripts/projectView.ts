import { Project } from "./project";
import { ProjectManager } from "./projectManager"


export class ProjectTabView {


  constructor(private projectManager: ProjectManager) {
    this.buildView();
  }

  projectTabArea = document.querySelector(".projectTabs");
  projectHeader = document.querySelector("header>div");

  buildView() {
    let projectAddButton = this.createAddProjectButton();
    this.addProjectButton(projectAddButton);
    let tab = this.createProjectTab();
    this.createProjectTabDeleteButton(tab);
  }


  addProjectButton(projectAddButton: HTMLElement) {
    projectAddButton.addEventListener('click', () => {
      let tab = this.createProjectTab();
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
    addProjectButton.classList.add("projectAddButton");
    this.projectHeader.appendChild(addProjectButton);
    return addProjectButton;
  }

  createProjectTab() {
    let project = new Project();
    project.Title = project.makeDefaultProjectName();
    let tab = document.createElement("div");
    tab.classList.add('tab');
    tab.innerHTML = project.Title;
    tab.addEventListener('click', () => this.switchTo(tab));
    tab.appendChild(this.createProjectTabDeleteButton(tab));
    return tab;
  }

  switchTo(tab: HTMLElement) {
    let todoDiv = document.querySelector('.todos');
    let project: Project = this.projectManager.load(Number(tab.dataset.indexNumber));
    //todoDiv.appendChild(tabContent);
  }

  deleteProjectTab(tab: HTMLElement) {
    console.log("deleting");
    this.projectTabArea.removeChild(tab);
  }

}
