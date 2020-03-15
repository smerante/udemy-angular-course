import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: '<span class="successContainer"><span class="success">Success!</span></span>',
  styleUrls: ['../app.component.css']  
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
