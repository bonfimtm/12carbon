import { Component, HostListener } from '@angular/core';

import { NavController } from 'ionic-angular';

import { CalcService } from '../../providers/calc-service';
import { ScannerService } from '../../providers/scanner-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  expression = ' ';
  result = ' ';

  constructor(public navCtrl: NavController,
              private scannerService: ScannerService,
              private calcService: CalcService) {
  }

  push(item: string) {
    switch (item) {
      case '0': case '1': case '2': case '3': case '4':
      case '5': case '6': case '7': case '8': case '9':
      case '+': case '-': case '*': case '/':
        this.expression += item;
        break;
      case ' ':
      case '_':
      case '↩':
        this.expression += ' ';
        break;
      case 'AC':
        this.expression = ' ';
        this.result = ' ';
        break;
      case 'C':
        this.expression = this.expression.length > 1 ? this.expression.substring(0, this.expression.length - 1) : ' ';
        break;
      case '=':
        this.result = this.calcService.eval(this.scannerService.tokenize(this.expression));
        break;
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKey(event: KeyboardEvent) {
    switch (event.key) {
      case '0': case '1': case '2': case '3': case '4':
      case '5': case '6': case '7': case '8': case '9':
      case '+': case '-': case '*': case '/':
        this.push(event.key);
        break;
      case ' ':
        this.push(' ');
        break;
      case 'Escape':
      case 'Delete':
        this.push('AC');
        break;
      case 'Backspace':
        this.push('C');
        break;
      case '=':
      case 'Enter':
        this.push('=');
        break;
    }
  }

}