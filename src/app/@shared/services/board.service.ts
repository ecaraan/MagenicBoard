import { Injectable } from '@angular/core';
import { Board } from '../../model/board';

@Injectable()
export class BoardService {

  boards: Board[];

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

  public getBoards() : Board[] {
    return this.boards;
  }

  public boardExists(name: string): boolean {
    return this.boards.findIndex(item => item.name.toLowerCase() === name.toLowerCase()) != -1;
  }

  public addBoard(name: string): boolean {
    if (!this.boardExists(name)){
      var board = new Board();
      board.name = name;

      this.boards.push(board);
      return true;
    }

    return false;
  }
}
