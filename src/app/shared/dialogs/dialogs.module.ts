import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [
    ConfirmDialogComponent,
  ],
})
export class DialogsModule { }
