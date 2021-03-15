import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 

import { HomeComponent } from './pages/home/home.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FlexLayoutModule,

    MatCardModule,
    MatButtonModule,
  ],
  exports: [ RouterModule ],
  providers: [],
})
export class HomeModule { }