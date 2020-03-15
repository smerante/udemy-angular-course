import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  components: [{'type': string, 'val': number}];
  ngOnInit(){
    this.components = [{ 'type' : 'init' , 'val' : -1 }];
  }
  update(val : {'value': number}){
    let type = val.value%2===0 ? 'Even' : 'Odd';
    this.components.push({'type': type, 'val': val.value});
  }
}
