import { Component, OnInit, Input } from '@angular/core';
import { BoardService } from '../../@shared/services/board.service';
import { CardPool } from '../../model/cardpool';
import { Card } from '../../model/card';
import { MatDialog } from '@angular/material';
import { MoveCardComponent } from '../move-card/move-card.component'

@Component({
  selector: 'app-card-pool',
  templateUrl: './card-pool.component.html',
  styleUrls: ['./card-pool.component.css']
})
export class CardPoolComponent implements OnInit {

  @Input() boardId: number;
  @Input() cardPool: CardPool;
  cardName: string;
  isAddMode: boolean = false;
  validationErrors: string[];

  constructor(private boardService: BoardService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  editCard(card: Card, cardPool: number): void {
    let dialogRef = this.dialog.open(MoveCardComponent, {
      data: {
        currentCardPool: cardPool,
        card: card
      }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.boardService.moveCard(this.boardId, this.cardPool.id, result, card);
      }
    });
  }

  addCard(): void {
    this.cardName = '';
    this.isAddMode = true;
  }

  submitAddCard(f): void {
    this.validationErrors = [];
    
    if (!f.invalid){
      this.boardService.addCard(this.cardName, this.boardId, this.cardPool.id);
      this.isAddMode = false;
    }
    else{
      if (f.controls.cardName.errors){
        if (f.controls.cardName.errors.required)
          this.validationErrors.push("Card Name is required.");
        if (f.controls.cardName.errors.alreadyExists)
          this.validationErrors.push(f.controls.cardName.errors.alreadyExists.value);          
      }
    }
  }

  cancelAddCard(e): void {
    this.isAddMode = false;
    e.preventDefault();
  }
}
