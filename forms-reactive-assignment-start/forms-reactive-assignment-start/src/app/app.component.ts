import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup
  statusSelection: string[];

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectData': new FormGroup({
        'projectName': new FormControl(null, [Validators.required, this.blackList],this.asyncBlackList),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'status': new FormControl(null)
    });
    this.statusSelection = ['Stable', 'Critical', 'Finished'];
  }

  blackList(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Test' || control.value === 'test') {
      return { 'blackListed': true };
    }
    return null;
  }

  asyncBlackList(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test1' || control.value === 'test1') {
          resolve({ 'blackListed': true });
        }
        resolve(null);
      }, 1500)
    });
    return promise;
  }
  

  onSubmit() {
    console.log(this.projectForm);
  }
}
