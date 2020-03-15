import { Injectable, EventEmitter } from '@angular/core';
import { CounterService } from './Counter.service';

@Injectable()
export class UsersService {

  public activeUsers = ['Max', 'Anna'];
  public inactiveUsers = ['Chris', 'Manu'];

  setToActive = new EventEmitter<number>();
  setToInactive = new EventEmitter<number>();

  constructor(private counterService: CounterService) {
    this.setToActive.subscribe(
      (id: number) => this.onSetToActive(id)
    );
    this.setToInactive.subscribe(
      (id: number) => this.onSetToInactive(id)
    );
   }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.transition();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.transition();
  }

}
