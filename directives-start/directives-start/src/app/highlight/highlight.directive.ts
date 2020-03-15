import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
 selector: '[appHighlight]' //For use as an attribute not an element
})
export class HighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef){}

  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}