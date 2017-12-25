import { Component, OnInit, Input } from '@angular/core';
import { BoardService } from '../../@shared/services/board.service';
import { CardPool } from '../../model/cardpool';

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

  constructor(private boardService: BoardService) { }

  ngOnInit() {
  }

  editCard(): void {
    alert('hahah');
  }

  addCard(): void {
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

  cancelAddCard(): void {
    this.isAddMode = false;
  }
}
