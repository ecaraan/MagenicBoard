import { Directive, Input } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';
import { BoardService } from '../services/board.service';

@Directive({
  selector: '[appUniqueCard]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: UniqueCardDirective,
    multi: true
  }]
})

export class UniqueCardDirective implements Validator  {

  @Input() appUniqueCard: number;

  constructor(private boardService: BoardService) { } 

  validate(control: AbstractControl): ValidationErrors{
    return this.checkValue()(control);
  }

  checkValue(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {

      if (control.value){
        return this.boardService.cardExists(this.appUniqueCard, control.value)
          ? {'alreadyExists' : { value: 'The card name already exists.' }}
          : null;
      }

      return null;      
    }
  }

}
