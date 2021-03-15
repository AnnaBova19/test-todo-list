import { Todo } from './models';

export class GetTodos {
  static readonly type = '[Todo] Get';
}

export class AddTodo {
  static readonly type = '[Todo] Add';

  constructor(public payload: Todo) {
  }
}

export class UpdateTodo {
  static readonly type = '[Todo] Update';

  constructor(public payload: Todo) {
  }
}

export class DeleteTodo {
  static readonly type = '[Todo] Delete';

  constructor(public id: number) {
  }
}

export class ClearTodos {
  static readonly type = '[Todo] Clear';

  constructor() {
  }
}