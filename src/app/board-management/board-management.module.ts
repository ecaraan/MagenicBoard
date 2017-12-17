import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BoardListComponent } from './board-list/board-list.component';
import { MaterialModule } from '../material.module';
import { NewBoardComponent } from './new-board/new-board.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, MaterialModule, FormsModule
  ],
  exports: [NavigationComponent, MainPageComponent],
  declarations: [NavigationComponent, MainPageComponent, BoardListComponent, NewBoardComponent],
  entryComponents: [NewBoardComponent]
})
export class BoardManagementModule { }
