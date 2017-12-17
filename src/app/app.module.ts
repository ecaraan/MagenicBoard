import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BoardManagementModule } from './board-management/board-management.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BoardManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
