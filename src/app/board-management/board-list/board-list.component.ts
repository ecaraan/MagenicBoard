import { Component, OnInit } from '@angular/core';
import { Board } from '../../model/board';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {

  boards: Board[]

  constructor() { 
    this.boards = [
      {
        name: "Board 1",
      },
      {
        name: "Board 2",
      },
      {
        name: "Board 3",
      },
      {
        name: "Board 4",
      },
      {
        name: "Board 5",
      },
      {
        name: "Board 6",
      } 
    ];
  }

  ngOnInit() {
  }

}
