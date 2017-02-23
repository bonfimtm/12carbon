import { Component, Input } from '@angular/core';
import { HomePage } from '../home/home';

@Component({
  selector: 'tw-button',
  templateUrl: 'button.html'
})
export class CarbonButton {

  @Input()
  op: string;

  constructor(private homePage: HomePage) {
  }

  push() {
    this.homePage.push(this.op);
  }
}