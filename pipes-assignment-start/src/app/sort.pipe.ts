import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<any>): any {
    let sortedArray = value.sort((a: any, b: any) => {
      if (a.name < b.name) {
        return -1;
      }
      return 1;
    });
    return sortedArray;
  }
}
