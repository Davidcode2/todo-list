import { Project } from "./project";

export class App {

  selectedProject: Project;

  constructor(defaultProject: Project) {
    this.selectedProject = defaultProject;
  }

}
