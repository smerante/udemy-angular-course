import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css'], 
  encapsulation: ViewEncapsulation.None
})
export class OddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
