import { Component, OnInit } from '@angular/core';
import { Board } from '../../model/board';
import { BoardService } from '../../@shared/services/board.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  board: Board;

  constructor(private boardService: BoardService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.board = boardService.getBoard(params['id']);
    });
  }

  ngOnInit() {
  }

}
