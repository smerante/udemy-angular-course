import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector:'[green]',
})
export class GreenComponent{
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'lightgreen';
 }
}