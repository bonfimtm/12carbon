import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CalcService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CalcService {

  constructor(public http: Http) {
    console.log('Hello CalcService');
  }

  eval(tokens: string[]) {
    let operandStack = [];
    for (let item of tokens) {
      if (/^(\-|\+)?([0-9]+)$/.test(item)) {
        console.log('operand', item);
        operandStack.push(parseInt(item, 10));
      } else if (/^\-|\+|\*|\/$/.test(item)) {
        console.log('operator', item);
        let secondOperand = operandStack.pop();
        let firstOperand = operandStack.pop();
        switch (item) {
          case '+':
            operandStack.push(firstOperand + secondOperand);
            break;
          case '-':
            operandStack.push(firstOperand - secondOperand);
            break;
          case '*':
            operandStack.push(firstOperand * secondOperand);
            break;
          case '/':
            operandStack.push(firstOperand / secondOperand);
            break;
        }
      } else {
        console.log('none of them');
      }
    }
    console.log(operandStack);
    return operandStack.pop().toString();
  }

}
