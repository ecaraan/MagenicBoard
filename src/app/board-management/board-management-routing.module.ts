import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardComponent } from './board/board.component';

const routes: Routes = [
    { path: '', component: BoardListComponent },
    { path: 'board/:id', component: BoardComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class BoardManagementRoutingModule { }
