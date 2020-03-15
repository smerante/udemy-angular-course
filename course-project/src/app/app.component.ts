import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyAT2mNclO9GNrJJLRcg_edr7y5FAMeD8Wc",
      authDomain: "ng-recipe-book-afab5.firebaseapp.com"
    })
  }

  route: string = 'Recipe';

  onNavigate(selection: string){
    this.route = selection;
  }
}

//https://ng-recipe-book-afab5.firebaseio.com/