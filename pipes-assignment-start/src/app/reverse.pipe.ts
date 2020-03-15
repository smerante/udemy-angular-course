import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): any {
    let valueSplit = value.split('');
    let reversed = valueSplit.reverse();
    return reversed.join('');
  }

}
