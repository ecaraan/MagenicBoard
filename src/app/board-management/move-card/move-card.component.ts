import { Input, Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CardPool } from '../../model/cardpool';
import { Card } from '../../model/card';
import { BoardService } from '../../@shared/services/board.service'

@Component({
  selector: 'app-move-card',
  templateUrl: './move-card.component.html',
  styleUrls: ['./move-card.component.css']
})
export class MoveCardComponent implements OnInit {

  validationErrors: string[];
  cardPools: CardPool[];
  card: Card;
  
  constructor(private boardService: BoardService, private dialogRef: MatDialogRef<MoveCardComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.cardPools = boardService.getCardPools().filter(c => c.id != data.currentCardPool);
    this.card = data.card;
  }

  ngOnInit() {
  }

  onSubmit(f) {
    this.validationErrors = [];

    if (f.controls.newCardPool.value){
      this.dialogRef.close(f.controls.newCardPool.value);
    }
    else{      
      this.validationErrors.push("Please select an option.");
    }
  }
}
