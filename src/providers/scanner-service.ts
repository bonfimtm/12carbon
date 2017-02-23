import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ScannerService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ScannerService {

  constructor(public http: Http) {
    console.log('Hello ScannerService');
  }

  tokenize(expression: string) {
    let tokens: string[] = [];
    // Ex.: 12 34+
    let currentToken = '';
    for (let c of expression) {
      if (Number.isInteger(Number(c)) && c != ' ') {
        // Number
        currentToken += c;
      } else {
        if (currentToken) {
          // End of number
          tokens.push(currentToken);
          currentToken = '';
        }
        if (c != ' ') {
          // + - * /
          tokens.push(c);
        }
      }
    }
    // End of expression
    if (currentToken) {
      tokens.push(currentToken);
      currentToken = '';
    }
    console.log(tokens);
    return tokens;
  }

}
