import { Component, Input } from '@angular/core';

@Component({
  selector: 'tw-expression',
  templateUrl: 'expression.html'
})
export class CarbonExpression {

  @Input()
  expression: string;

}
