import { Directive, Input } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';
import { BoardService } from '../services/board.service';

@Directive({
  selector: '[appUniqueBoard]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: UniqueBoardDirective,
    multi: true
  }]
})

export class UniqueBoardDirective implements Validator  {

  constructor(private boardService: BoardService) { } 

  validate(control: AbstractControl): ValidationErrors{
    return this.allowedValuesValidator()(control);
  }

  allowedValuesValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {

      if (control.value){
        return this.boardService.boardExists(control.value)
          ? {'alreadyExists' : { value: 'The  board name already exists.' }}
          : null;
      }

      return null;      
    }
  }

}
