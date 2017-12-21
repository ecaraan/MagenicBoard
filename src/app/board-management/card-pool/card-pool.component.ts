import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-pool',
  templateUrl: './card-pool.component.html',
  styleUrls: ['./card-pool.component.css']
})
export class CardPoolComponent implements OnInit {

  @Input() cardPool: string;
  isAddMode: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  editCard(): void {
    alert('hahah');
  }

  addCard(): void {
    this.isAddMode = true;
  }

  submitAddCard(): void {
  }

  cancelAddCard(): void {
    this.isAddMode = false;
  }
}
