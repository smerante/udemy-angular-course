import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  onSignin(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.errorMessage = '';
    
    this.authService.signInUser(email,password)
    .catch(
      (error: Error) => {
        if(error['message']){
          this.errorMessage = error['message'];
        }
      }
    );
  }

}
