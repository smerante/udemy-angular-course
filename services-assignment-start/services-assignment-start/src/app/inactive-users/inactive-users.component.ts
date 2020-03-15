import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../Users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
   users: string[];

  constructor(private userService: UsersService) {
    this.users = userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userService.setToActive.emit(id);
  }
}
