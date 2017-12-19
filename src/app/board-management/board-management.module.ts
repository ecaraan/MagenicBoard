import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BoardListComponent } from './board-list/board-list.component';
import { MaterialModule } from '../material.module';
import { NewBoardComponent } from './new-board/new-board.component';
import { FormsModule } from '@angular/forms';
import { BoardComponent } from './board/board.component';
import { CardComponent } from './card/card.component';
import { BoardManagementRoutingModule } from './board-management-routing.module';

@NgModule({
  imports: [
    CommonModule, MaterialModule, FormsModule, BoardManagementRoutingModule
  ],
  exports: [NavigationComponent, MainPageComponent],
  declarations: [NavigationComponent, MainPageComponent, BoardListComponent, NewBoardComponent, BoardComponent, CardComponent],
  entryComponents: [NewBoardComponent]
})
export class BoardManagementModule { }
