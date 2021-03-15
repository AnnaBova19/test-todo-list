import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TodosService } from '../../services/todos.service';
import { Todo } from '../../store/models';

import { MatDialog } from '@angular/material/dialog';
import { TodoDialogComponent } from '../../components/todo-dialog/todo-dialog.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(
    private todosService: TodosService,
    public dialog: MatDialog
  ) {
    this.todos$ = this.todosService.getTodos();
  }

  ngOnInit(): void {
  }

  openTodoDialog(): void {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      width: '500px',
      height: 'auto',
      autoFocus: false,
      disableClose: true,
      data: { isNew: true }
    });
    dialogRef.afterClosed().subscribe(result => {});
  }

  clearAll(): void {
    this.todosService.clearTodos();
  }
}
