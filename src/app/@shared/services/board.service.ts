import { Injectable } from '@angular/core';
import { Board } from '../../model/board';

@Injectable()
export class BoardService {

  boards: Board[];

  constructor() {
    this.boards = [
      {
        id: 1,
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
        id: 2,
        name: "Board 2",
        cards: []
      },
      {
        id: 3,
        name: "Board 3",
        cards: []
      },
      {
        id: 4,
        name: "Board 4",
        cards: []
      },
      {
        id: 5,
        name: "Board 5",
        cards: []
      },
      {
        id: 6,
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
      var lastId = this.boards.map(b => b.id).sort()[this.boards.length - 1];

      board.id = lastId + 1;
      board.name = name;

      this.boards.push(board);
      return true;
    }

    return false;
  }

  public getBoard(id: number): Board {
    return this.boards.find(_ => _.id == id);
  }
}
