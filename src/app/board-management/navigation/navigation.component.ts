import { Component, OnInit } from '@angular/core';
import { Board } from '../../model/board';
import { BoardService } from '../../@shared/services/board.service';
import { MessagingService } from '../../@shared/services/messaging.service';
import { MatDialog } from '@angular/material';
import { NewBoardComponent } from '../new-board/new-board.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  boards: Board[];

  constructor(private boardService: BoardService, private messagingService: MessagingService,
    private dialog: MatDialog, private router: Router) {
    this.boards = boardService.getBoards();
  }

  ngOnInit() {
  }

  newBoard(): void {
    let dialogRef = this.dialog.open(NewBoardComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        let id = this.boardService.addBoard(result);

        if (id > 0){
          this.boards = this.boardService.getBoards();
          this.messagingService.addBoard();
          this.router.navigateByUrl('/board/' + id);
        }
      }
    });    
  }

}
