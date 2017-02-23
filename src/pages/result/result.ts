import { Component, Input } from '@angular/core';

@Component({
  selector: 'tw-result',
  templateUrl: 'result.html'
})
export class CarbonResult {

  @Input()
  result: string;

}
