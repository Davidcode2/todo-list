import { Project } from "./project";
import { ProjectTabView } from "./projectView";
import { TodoManager } from "./todoManager";

export class ProjectManager {

  projects: Project[] = [];

  constructor() {
    this.createProject();
    this.projects[0].Title = "My Todos";
    TodoManager.SelectedProject = this.projects[0];
  }

  public load(projectId: number) {
    return this.projects[projectId];
  }

  public createProject() {
    let project = new Project();
    this.projects.push(project);
    return project;
  }

}

