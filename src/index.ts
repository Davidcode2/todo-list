import './css/style.css';
import { Project } from './scripts/project';
import { Todo } from './scripts/todo';
import './scripts/projectView';
import { ProjectTabView } from "./scripts/projectView";
import { ProjectManager } from './scripts/projectManager';
import { TodoView } from './scripts/todoView';
import { App } from './scripts/app';
import { TodoManager } from './scripts/todoManager';

let projectManager = new ProjectManager();
new ProjectTabView(projectManager);
new TodoView();

console.log("yay");
