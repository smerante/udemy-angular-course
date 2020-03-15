import { Directive, OnInit, Renderer2, Input, ElementRef, HostListener, HostBinding } from "@angular/core";


@Directive({
  selector: '[appBetterHighlighet]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'lightblue';
  
  @HostBinding('style.backgroundColor') backgroundColor: string; //Accessing the dOM property

  constructor(private elementRef: ElementRef, private renderer: Renderer2){}
  
  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
  }


  @HostListener('mouseenter') mouseOver(eventData: Event){
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseLeave(eventData: Event){
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
  }
}