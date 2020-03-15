import { Component, 
  OnInit, 
  Input, 
  OnChanges, 
  SimpleChanges,
  ViewChild,
  ElementRef,
  ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation : ViewEncapsulation.None Doesnt add angular attributes allows overriding of css
})
export class ServerElementComponent implements OnInit, OnChanges {

  @Input('serverElement') element: {type: string, name: string, content: string};
  @ViewChild('heading') nameElmnt: ElementRef; 
  @Input() name: string;;
  @ContentChild('contentPar') contentElmnt: ElementRef;
  constructor() { 
    console.log("Constructor");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges ", changes);
  }

  ngOnInit() {
    console.log("ngOnInit ");
    console.log('Text content: ' + this.nameElmnt.nativeElement.textContent)
    console.log('par content: ' + this.contentElmnt.nativeElement.textContent)
  }

  ngDoCheck(){
    console.log("ng do check called");
  }

  ngAfterContentInit(){
    console.log("ng after content init");
    console.log('par content: ' + this.contentElmnt.nativeElement.textContent)
  }

  ngAfterContentChecked(){
    console.log("ng after content checked");
  }
  ngAfterViewInit(){
    console.log("afte view init");
    console.log('Text content: ' + this.nameElmnt.nativeElement.textContent)
  }
  ngAfterViewChecked(){
    console.log("afte view checked");
  }
  ngOnDestroy(){
    console.log("on destroy");
  }
}
