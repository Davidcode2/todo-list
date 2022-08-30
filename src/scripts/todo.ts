import { format } from "date-fns"

enum Priority {
  high,
  medium,
  low,
}

export class Todo {

  private title: string;
  private description: string;
  private dueDate: Date;
  private priority: Priority;
  private notes: string;

  constructor(title: string, description?: string, dueDate?: Date, priority: Priority = 2, notes?: string) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }

}
