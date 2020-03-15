import { NgModule } from "@angular/core";
import { DropdownDirective } from "./dropdown.directive";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    DropdownDirective,
  ],
  exports: [ //To make things accessible from elsewhere you need to export them
    CommonModule, // You dont need to import modules to share them
    DropdownDirective
  ]
})
export class SharedModule{

}