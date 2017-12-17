import { NgModule } from '@angular/core';
import { MatMenuModule, MatInputModule, MatDialogModule, MatFormFieldModule } from '@angular/material';

@NgModule({ 
  exports: [
    MatMenuModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule
  ]
})

export class MaterialModule { }