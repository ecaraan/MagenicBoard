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
        cardPools: [
          {
            id: 1,
            name: 'To Do',
            cards: [
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
            id: 2,
            name: 'In Progress',
            cards: [
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
        cardPools: []
      },
      {
        id: 3,
        name: "Board 3",
        cardPools: []
      },
      {
        id: 4,
        name: "Board 4",
        cardPools: []
      },
      {
        id: 5,
        name: "Board 5",
        cardPools: []
      },
      {
        id: 6,
        name: "Board 6",
        cardPools: []
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
