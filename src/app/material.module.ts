import { NgModule } from '@angular/core';
import { MatMenuModule, MatInputModule, MatDialogModule, MatFormFieldModule, MatRadioModule } from '@angular/material';

@NgModule({ 
  exports: [
    MatMenuModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatRadioModule
  ]
})

export class MaterialModule { }