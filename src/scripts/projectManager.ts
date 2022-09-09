import { Project } from "./project";

export class ProjectManager {

  projects: Project[];

  public load(projectId: number) {
    return this.projects[projectId];
  }

}

