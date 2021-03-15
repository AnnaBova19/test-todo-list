import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Todo } from './models';
import { GetTodos, AddTodo, UpdateTodo, DeleteTodo, ClearTodos } from './actions';

export interface TodosStateModel {
  todos: Todo[];
}

@State<TodosStateModel>({
  name: 'todos',
  defaults: {
    todos: [],
  }
})

@Injectable()
export class TodosState {
  constructor() { }

  @Selector()
  static getTodos(state: TodosStateModel) {
    return state.todos;
  }

  @Action(GetTodos)
  getTodos(ctx: StateContext<TodosStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
    });
  }

  @Action(AddTodo)
  addTodo(ctx: StateContext<TodosStateModel>, {payload}: AddTodo) {
    const state = ctx.getState();
    ctx.patchState({
      todos: [...state.todos, payload]
    });
  }

  @Action(UpdateTodo)
  editTodo(ctx: StateContext<TodosStateModel>, {payload}: UpdateTodo) {
    const state = ctx.getState();
    const todos = [...state.todos];
    const index = todos.findIndex(item => item.id === payload.id);
    todos[index] = payload;
    ctx.setState({
      ...state,
      todos: todos,
    });
  }

  @Action(DeleteTodo)
  deleteTodo(ctx: StateContext<TodosStateModel>, {id}: DeleteTodo) {
    const state = ctx.getState();
    const filteredArray = state.todos.filter(item => item.id !== id);
    ctx.setState({
      ...state,
      todos: filteredArray,
    });
  }

  @Action(ClearTodos)
  clearTodos(ctx: StateContext<TodosStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      todos: [],
    });
  }
}