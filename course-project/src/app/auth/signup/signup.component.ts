import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  //Reach out the firebase to get signin verification token back
  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.errorMessage = '';
    this.authService.signupUser(email,password)
    .catch(
      (error: Error) => {
        if(error['message']){
          this.errorMessage = error['message'];
        }
      }
    );
    
  }

}
