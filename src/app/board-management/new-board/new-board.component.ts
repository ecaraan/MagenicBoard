import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { BoardService } from '../../@shared/services/board.service';

@Component({
  selector: 'app-new-board',
  templateUrl: './new-board.component.html',
  styleUrls: ['./new-board.component.css']
})
export class NewBoardComponent implements OnInit {

  boardName: string;
  validationErrors: string[];

  constructor(private boardService: BoardService, private dialogRef: MatDialogRef<NewBoardComponent>) {}

  ngOnInit() {
  }

  onSubmit(f) {
    this.validationErrors = [];

    if (!f.invalid){
      this.dialogRef.close(this.boardName);
    }
    else{
      if (f.controls.boardName.errors){
        if (f.controls.boardName.errors.required)
          this.validationErrors.push("Board Name is required.");
        if (f.controls.boardName.errors.alreadyExists)
          this.validationErrors.push(f.controls.boardName.errors.alreadyExists.value);          
      }
    }
  }
}
