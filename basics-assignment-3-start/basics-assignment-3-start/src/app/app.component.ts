import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hideDetails: boolean = false;
  buttonHistory: Array<any> = [];
  buttonPushedAmt: number = 0;

  toggleDisplay(){
    this.hideDetails = !this.hideDetails;
    this.buttonHistory.push({
      timeStamp: new Date(),
      amt: ++this.buttonPushedAmt
    })
  }
}
