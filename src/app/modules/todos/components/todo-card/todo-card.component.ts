import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TodoDialogComponent } from '../todo-dialog/todo-dialog.component';
import { ConfirmDialogComponent } from '../../../../shared/dialogs/confirm-dialog/confirm-dialog.component';

import { TodosService } from '../../services/todos.service';
import { Todo } from '../../store/models';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {
  @Input() todo!: Todo;

  constructor(
    public dialog: MatDialog,
    private todosService: TodosService,
  ) { }

  ngOnInit(): void {
  }

  get isExpired(): Boolean {
    const now = new Date();
    const d = new Date(this.todo.expiryDate);
    return d < now;
  }

  openTodoDialog(): void {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      width: '500px',
      height: 'auto',
      autoFocus: false,
      disableClose: true,
      data: { todo: this.todo, isNew: false }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  confirmDelete(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      height: 'auto',
      disableClose: true,
      data: { message: 'Are you sure you want to delete this todo?' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.event && result.event === 'confirm') {
        this.todosService.deleteTodo(this.todo.id);
      }
    });
  }
}
