import { Directive ,Input, TemplateRef, ViewContainerRef} from "../../node_modules/@angular/core";



@Directive({
  selector: '[unless]'
})


export class UnlessDirective{
  @Input() set unless(condition: boolean){
    if ( !condition ){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainer.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef){}
}