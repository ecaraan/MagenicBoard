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

  constructor(private boardService: BoardService, private dialogRef: MatDialogRef<NewBoardComponent>) {}

  ngOnInit() {
  }

  onCreate() {
    if (!this.boardService.boardExists(this.boardName))
    {
      this.dialogRef.close(this.boardName);
    }
    else{
      alert('Board name already exists.')
    }
  }
}
