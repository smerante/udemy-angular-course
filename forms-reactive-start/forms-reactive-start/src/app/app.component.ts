import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup;
  blacklistUserNamed = ['Chris', 'Anna'];

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'userName': new FormControl(null, [Validators.required, this.blackList.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.blackListEmail),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    this.signUpForm.valueChanges.subscribe(
      (value) =>{
        console.log(value);
      }
    )
    this.signUpForm.statusChanges.subscribe(
      (status)=>{
        console.log(status);
      }
    )
    this.signUpForm.setValue({
      'userData': {
        'userName': 'Sam',
        'email': 'test@gmail.com'
      },
      'gender': 'mail',
      'hobbies': []
    })
  }

  onAddHoby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  blackList(control: FormControl): { [s: string]: boolean } {
    if (this.blacklistUserNamed.indexOf(control.value) !== -1) {
      return { 'blackListed': true };
    }
    return null;
  }

  blackListEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@gmail.com') {
          resolve({ 'blackListed': true });
        } else {
          resolve(null);
        }
      }, 1500)
    });
    return promise;
  }
}
