import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BoardListComponent } from './board-list/board-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NavigationComponent, MainPageComponent],
  declarations: [NavigationComponent, MainPageComponent, BoardListComponent]
})
export class BoardManagementModule { }
