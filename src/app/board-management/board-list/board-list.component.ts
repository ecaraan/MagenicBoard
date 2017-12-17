import { Component, OnInit } from '@angular/core';
import { Board } from '../../model/board';
import { BoardService } from '../../@shared/services/board.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {

  boards: Board[]

  constructor(private boardService: BoardService) { 
    this.boards = boardService.getBoards();
  }

  ngOnInit() {
  }

}
