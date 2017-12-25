import { Injectable } from '@angular/core';
import { Board } from '../../model/board';
import { CardPool } from '../../model/cardPool';
import { Card } from '../../model/card';

@Injectable()
export class BoardService {

  boards: Board[];
  cardPools: CardPool[];

  constructor() {

    this.cardPools = [
      {
        id: 1,
        name: 'To Do',
        cards: []
      },
      {
        id: 2,
        name: 'In Progress',
        cards: []
      },
      {
        id: 3,
        name: 'Done',
        cards: []
      }
    ];

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
          },
          {
            id: 3,
            name: 'Done',
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
        cardPools: this.cardPools
      },
      {
        id: 3,
        name: "Board 3",
        cardPools: this.cardPools
      },
      {
        id: 4,
        name: "Board 4",
        cardPools: this.cardPools
      },
      {
        id: 5,
        name: "Board 5",
        cardPools: this.cardPools
      },
      {
        id: 6,
        name: "Board 6",
        cardPools: this.cardPools
      } 
    ];
  }

  public getBoards() : Board[] {
    return this.boards;
  }

  public boardExists(name: string): boolean {
    return this.boards.findIndex(item => item.name.toLowerCase() === name.toLowerCase()) != -1;
  }

  public cardExists(boardId: number, cardName: string): boolean {
    let board = this.boards.find(item => item.id == boardId);
    var alreadyExists = false;

    for (let cardPool of board.cardPools){
      if (cardPool.cards.findIndex(c => c.name.toLowerCase() === cardName.toLowerCase()) != -1)
      {
        alreadyExists = true;
        break;
      }    
    }

    return alreadyExists;
  }

  public addBoard(name: string): boolean {
    if (!this.boardExists(name)){
      var board = new Board();
      var lastId = this.boards.map(b => b.id).sort()[this.boards.length - 1];

      board.id = lastId + 1;
      board.name = name;
      board.cardPools = this.cardPools;

      this.boards.push(board);
      return true;
    }

    return false;
  }

  public getBoard(id: number): Board {
    return this.boards.find(_ => _.id == id);
  }

  public addCard(name: string, boardId: number, cardPoolId: number): boolean
  {
    if (!this.cardExists(boardId, name)){
      let cardPool = this.boards.find(b => b.id == boardId).cardPools.find(c => c.id == cardPoolId);
      var newCard = new Card();

      newCard.name = name;
      cardPool.cards.push(newCard);

      return true;
    }

    return false;
  }
}
