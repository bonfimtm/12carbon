import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | substr:start:end
 * Example:
 *   {{ 'Bonfim' |  substr:1:3}}
 *   formats to: onf
*/
@Pipe({name: 'substr'})
export class SubstrPipe implements PipeTransform {
  transform(value: string, start: number, end: number): string {
    return value.substring(start, end);
  }
}
