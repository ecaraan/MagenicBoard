import { Injectable } from '@angular/core';
import { Board } from '../../model/board';

@Injectable()
export class BoardService {

  constructor() { }

  public getBoards() : Board[] {
    return [
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

}
