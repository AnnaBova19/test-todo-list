import { Injectable } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { TodosState } from '../store/state';
import { Todo } from '../store/models';
import { AddTodo, UpdateTodo, DeleteTodo, ClearTodos } from '../store/actions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: Array<Todo> = [];

  constructor(
    private store: Store,
  ) { }

  @Select(TodosState.getTodos) todos$!: Observable<Todo[]>;

  getTodos(): Observable<Todo[]> {
    return this.todos$;
  }

  addTodo(todo: Todo): void {
    this.store.dispatch(new AddTodo(todo));
  }

  updateTodo(todo: Todo): void {
    this.store.dispatch(new UpdateTodo(todo));
  }

  deleteTodo(id: number): void {
    this.store.dispatch(new DeleteTodo(id));
  }

  clearTodos(): void {
    this.store.dispatch(new ClearTodos());
  }
}
