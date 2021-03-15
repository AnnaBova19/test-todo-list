import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodosComponent } from './pages/todos/todos.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { TodoDialogComponent } from './components/todo-dialog/todo-dialog.component';

import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { environment} from '../../../environments/environment'
import { TodosState } from './store/state';
import { TodosService } from '../todos/services/todos.service';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';

import { DialogsModule } from '../../shared/dialogs/dialogs.module';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: TodosComponent }
];

@NgModule({
  declarations: [
    TodosComponent,
    TodoCardComponent,
    TodoDialogComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    NgxsModule.forRoot([
      TodosState      
    ]),
    NgxsStoragePluginModule.forRoot({
      key: 'todos'
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),

    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatDialogModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTooltipModule,

    DialogsModule,
    SharedModule,
  ],
  exports: [ RouterModule ],
  providers: [ TodosService ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  entryComponents:[ 
    TodoDialogComponent,
  ]
})
export class TodosModule { }