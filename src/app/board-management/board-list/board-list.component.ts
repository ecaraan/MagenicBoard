import { Component, OnInit } from '@angular/core';
import { Board } from '../../model/board';
import { BoardService } from '../../@shared/services/board.service';
import { MessagingService } from '../../@shared/services/messaging.service';
import { Subject, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {

  boards: Board[];
  private destroyed$ = new Subject();

  constructor(private boardService: BoardService, private messagingService: MessagingService) { 
    this.boards = boardService.getBoards();
  }

  ngOnInit() {
    this.messagingService.addBoard$.takeUntil(this.destroyed$).subscribe(
      m => {
        this.boards = this.boardService.getBoards();
      }
    );
  }

}
