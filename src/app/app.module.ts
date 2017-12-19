import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BoardManagementModule } from './board-management/board-management.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardManagementRoutingModule } from './board-management/board-management-routing.module';

import { AppComponent } from './app.component';

import { BoardService } from './@shared/services/board.service';
import { MessagingService } from './@shared/services/messaging.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BoardManagementModule,
    BrowserAnimationsModule,
    BoardManagementRoutingModule
  ],
  providers: [BoardService, MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
