import { Component } from '@angular/core';
import { UsersService } from './Users.service';
import { CounterService } from './Counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  activeUsers: string[];
  inactiveUsers: string[];
  counter = this.counterService;
  constructor(userService: UsersService,
  private counterService: CounterService) {
    this.activeUsers = userService.activeUsers;
    this.inactiveUsers = userService.inactiveUsers;
  }
}
