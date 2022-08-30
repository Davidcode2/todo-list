import { Todo } from './todo';

test('create new todo only with title', () => {
  expect(new Todo("meditate")).toEqual({
    title: "meditate",
    description: undefined,
    dueDate: undefined,
    priority: 2,
    notes: undefined
  });
});

test('create new todo with date', () => {
  expect(new Todo("go running", undefined, new Date(2022, 2, 7))).toEqual({
    title: "go running",
    description: undefined,
    dueDate: new Date(2022, 2, 7),
    priority: 2,
    notes: undefined
  });
});
