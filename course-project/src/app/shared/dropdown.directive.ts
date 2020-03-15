import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  opened: boolean;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.opened = false;
  }

  @HostListener('click') clickEvent(e: Event) {
    this.opened = !this.opened;
    if (this.opened) {
      this.renderer.addClass(this.elementRef.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    }
  }

}
