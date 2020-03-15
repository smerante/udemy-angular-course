import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

@ViewChild('f') signupForm: NgForm;
defaultQuestion = 'teacher';
answer='placeholder';
genders = ['male','female'];
user = {
  userName: '',
  email: '',
  secretQuestion: '',
  answer: '',
  gender: ''
}
submitted = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     userName: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.signupForm.form.patchValue({
      userData:{ userName: suggestedName}
    });
  }

  // onSubmit(form: NgForm){
  //   console.log("submitted: ", form);
  // }

  onSubmit(){
    this.submitted = true;
    this.user.userName = this.signupForm.value.userData.userName;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset();
  }
}
