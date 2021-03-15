import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 

import { AppLayoutComponent } from './app-layout.component';
import { AppHeaderComponent } from '../app-header/app-header.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

const routes: Routes = [
  { 
    path: '', 
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('../../modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'todos',
        loadChildren: () => import('../../modules/todos/todos.module').then(m => m.TodosModule)
      },
    ]
  }
];

@NgModule({
  declarations: [
    AppLayoutComponent,
    AppHeaderComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,

    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
  ],
  exports: [ RouterModule ],
  providers: [],
})
export class AppLayoutModule { }