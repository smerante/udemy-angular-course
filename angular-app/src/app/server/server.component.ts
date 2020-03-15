import { Component } from '@angular/core';

@Component({
  selector:'app-server',
  templateUrl : './server.component.html',
  styles: [
    `
    .online{
      color: white;
    }
    .offline{
      color: blue;
    }
    `
  ]
})
export class ServerComponent{
  serverId: number = 10;
  serverStatus: string = "offLine";

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus(): string{
    return this.serverStatus;
  }
  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red'; 
  }
}