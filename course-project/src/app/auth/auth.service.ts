import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;

  constructor(private router: Router) { }

  signupUser(email: string, password: string) {
    console.log('signing up user : ' + email);
    //this is a promise so you can listen with .then
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        data => {
          console.log(data);
          return data;
        }
      );
  }

  signInUser(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          console.log('signin success: ');
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token;
              }
            );
        }
      );
  }

  retrieveToken() {
    firebase.auth().currentUser.getIdToken().then(
      (token: string) => {
        this.token = token;
      }
    );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout(){
    firebase.auth().signOut();
    this.router.navigate(['/']);
    this.token = null;
  }

}
