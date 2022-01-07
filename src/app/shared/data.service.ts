import { Injectable } from '@angular/core';
import { Todo } from './todo.module';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
    new Todo('This is a test', true),
    new Todo('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, totam error laboriosam exercitationem ab, laudantium neque quisquam doloribus enim repellendus, vel placeat? Natus, voluptates voluptatem. Repellat ipsum sint nisi animi.', true)
  ];

  constructor() { }

  getAllTodos() {
    return this.todos;
  }

  allTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(index: number, updateTodo: Todo) {
    this.todos[index] = updateTodo;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
