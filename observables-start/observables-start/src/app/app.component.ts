import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activated1 = false;
  activated2 = false;

  constructor(private userService: UserService){}
  ngOnInit(){
    this.userService.userActivated.subscribe(
      (id: number) => {
          if(id === 1){
              this.activated1 = true;
          } else if(id === 2){
            this.activated2 = true;
          }
      }
    );
  }
}
