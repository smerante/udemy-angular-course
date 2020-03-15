import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  public accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) { }

  addAccount(name: string, status: string) {
    this.loggingService.logStatusCange(status);
    this.accounts.push({ name: name, status: status });
  }

  updateAccount(id: number, status: string) {
    this.loggingService.logStatusCange(status);
    this.accounts[id].status = status;
  }

}
