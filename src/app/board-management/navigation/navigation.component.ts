import { Component, OnInit } from '@angular/core';
import { Board } from '../../model/board';
import { BoardService } from '../../@shared/services/board.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  boards: Board[];

  constructor(private boardService: BoardService) {
    this.boards = boardService.getBoards();
  }

  ngOnInit() {
  }

}
