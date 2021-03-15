import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { TodosService } from '../../services/todos.service';
import { Todo } from '../../store/models';

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
  styleUrls: ['./todo-dialog.component.scss']
})
export class TodoDialogComponent implements OnInit {
  isNew: Boolean;
  todoForm!: FormGroup;
  minDate: Date;
  updatedTodoId!: number;
  todos: Array<Todo> = [];

  constructor(
    public dialogRef: MatDialogRef<TodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private todosService: TodosService,
  ) {
    this.isNew = data.isNew;
    this.todoForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      isCompleted: [false],
      isImportant: [false],
      expiryDate: ['', Validators.required]
    });
    this.minDate = new Date();
    this.todosService.getTodos().subscribe(res => this.todos = res);
  }

  ngOnInit(): void {
    if(this.data.todo) {
      this.updatedTodoId = this.data.todo.id;
      this.todoForm.patchValue(this.data.todo);
    }
  }

  get getMaxId(): number {
    return this.todos.reduce((max, todo) => (todo.id > max ? todo.id : max), 0);
  }

  create(): void {
    if (this.todoForm.valid) {
      const todo: Todo = {
        id: this.isNew ? this.getMaxId + 1 : this.updatedTodoId,
        name: this.todoForm.get('name')?.value,
        description: this.todoForm.get('description')?.value,
        isCompleted: this.todoForm.get('isCompleted')?.value,
        isImportant: this.todoForm.get('isImportant')?.value,
        expiryDate: this.todoForm.get('expiryDate')?.value,
      };
      if (this.isNew) {
        this.todosService.addTodo(todo);
      } else {
        this.todosService.updateTodo(todo);
      }
      this.closeDialog();
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
