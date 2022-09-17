import { Todo } from "./todo";

export let addFunctions =
  [

    function addTitle(todo: Todo) {
      let span = document.createElement("span");
      span.innerHTML = todo["title"];
      span.classList.add("todoTitle");
      if (todo.Checked) {
        span.classList.add("crossedOut");
      }
      return span;
    },

    function addDescription(todo: Todo) {
      let span = document.createElement("span");
      span.innerHTML = `description`;
      span.classList.add("descriptionKey", "todoKey");
      return span;
    },

    function addDescriptionProperty(todo: Todo) {
      let propertySpan = document.createElement("span");
      propertySpan.innerHTML = todo["description"];
      return propertySpan;
    },

    function addDueDate(todo: Todo) {
      let span = document.createElement("span");
      span.classList.add("dueDateKey", "todoKey");
      span.innerHTML = `due`;
      return span;
    },

    function addDueDateProperty(todo: Todo) {
      let propertySpan = document.createElement("span");
      propertySpan.innerHTML = String(todo["dueDate"]);
      return propertySpan;
    },

    function addNotes(todo: Todo) {
      let span = document.createElement("span");
      span.innerHTML = `notes`;
      span.classList.add("notesKey", "todoKey");
      return span
    },

    function addNotesProperty(todo: Todo) {
      let propertySpan = document.createElement("span");
      propertySpan.innerHTML = todo["notes"];
      return propertySpan;
    }

  ]
