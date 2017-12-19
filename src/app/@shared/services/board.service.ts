import { Injectable } from '@angular/core';
import { Board } from '../../model/board';

@Injectable()
export class BoardService {

  boards: Board[];

  constructor() {
    this.boards = [
      {
        name: "Board 1",
        cards: [
          {
            name: 'To Do',
            tasks: [
              {
                name: 'Task 1'
              },
              {
                name: 'Task 2'
              },
              {
                name: 'Task 3'
              }
            ]
          },
          {
            name: 'In Progress',
            tasks: [
              {
                name: 'Task 1'
              },
              {
                name: 'Task 2'
              }
            ]
          }
        ]
      },
      {
        name: "Board 2",
        cards: []
      },
      {
        name: "Board 3",
        cards: []
      },
      {
        name: "Board 4",
        cards: []
      },
      {
        name: "Board 5",
        cards: []
      },
      {
        name: "Board 6",
        cards: []
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

  public getBoard(): Board {
    return this.boards[0];
  }
}
