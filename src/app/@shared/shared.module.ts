import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniqueBoardDirective } from './directives/unique-board.directive';
import { UniqueCardDirective } from './directives/unique-card.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UniqueBoardDirective, UniqueCardDirective],
  exports: [UniqueBoardDirective, UniqueCardDirective]
})
export class SharedModule { }
