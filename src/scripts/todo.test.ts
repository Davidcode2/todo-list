import { Todo } from './todo';

test('create new todo', () => {
  expect(new Todo("meditate")).toEqual({
    title: "meditate",
    description: undefined,
    dueDate: undefined,
    priority: 2,
    notes: undefined
  });
});
