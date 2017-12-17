import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Board } from '../../model/board';

@Injectable()
export class MessagingService {
  private addBoardSubject: BehaviorSubject<Board> = new BehaviorSubject<Board>(null);
  public addBoard$ = this.addBoardSubject.asObservable();

  constructor() { }

  addBoard(): void {
    this.addBoardSubject.next(null);
  }
}
