import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

appStatus = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve('stable');
    }, 2000);
  });

servers = [
  {
    instanceType: 'medium',
    name: 'Production',
    status: 'stable',
    started: new Date(2018, 11, 22)
  },
  {
    instanceType: 'large',
    name: 'User Database',
    status: 'stable',
    started: new Date(2018, 11, 22)
  },
  {
    instanceType: 'small',
    name: 'Development Server',
    status: 'offline',
    started: new Date(2018, 11, 22)
  },
  {
    instanceType: 'small',
    name: 'Testing Environment Server',
    status: 'stable',
    started: new Date(2018, 11, 22)
  }
];

filteredStatus = '';

addServer(){
  this.servers.push({
    instanceType: 'small',
    name: 'New Server',
    status: 'stable',
    started: new Date(2018, 11, 22)
  })
}

getStatusClasses(server: { instanceType: string, name: string, status: string, started: Date }) {
  return {
    'list-group-item-success': server.status === 'stable',
    'list-group-item-warning': server.status === 'offline',
    'list-group-item-danger': server.status === 'critical'
  };
}
}
