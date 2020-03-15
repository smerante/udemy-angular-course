import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  // selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created.';
  serverName: string ='';
  serverCreated: boolean = false;
  servers: String[] = [];
  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },5000)
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created, name is " + this.serverName;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
