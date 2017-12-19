import { Component, OnInit } from '@angular/core';
import { Board } from '../../model/board';
import { BoardService } from '../../@shared/services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  board: Board;

  constructor(private boardService: BoardService) {
    this.board = boardService.getBoard();
  }

  ngOnInit() {
  }

}
