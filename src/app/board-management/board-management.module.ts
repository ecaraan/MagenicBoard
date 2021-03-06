import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BoardListComponent } from './board-list/board-list.component';
import { MaterialModule } from '../material.module';
import { NewBoardComponent } from './new-board/new-board.component';
import { FormsModule } from '@angular/forms';
import { BoardComponent } from './board/board.component';
import { BoardManagementRoutingModule } from './board-management-routing.module';
import { CardPoolComponent } from './card-pool/card-pool.component';
import { SharedModule } from '../@shared/shared.module';
import { MoveCardComponent } from './move-card/move-card.component';

@NgModule({
  imports: [
    CommonModule, MaterialModule, FormsModule, BoardManagementRoutingModule, SharedModule
  ],
  exports: [NavigationComponent, MainPageComponent],
  declarations: [NavigationComponent, MainPageComponent, BoardListComponent, NewBoardComponent, BoardComponent, CardPoolComponent, MoveCardComponent],
  entryComponents: [NewBoardComponent, MoveCardComponent]
})
export class BoardManagementModule { }
