import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniqueBoardDirective } from './directives/unique-board.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UniqueBoardDirective],
  exports: [UniqueBoardDirective]
})
export class SharedModule { }
