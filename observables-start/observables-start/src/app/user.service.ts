import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

public userActivated: Subject<any>;

constructor() {
  this.userActivated = new Subject();
 }

}
