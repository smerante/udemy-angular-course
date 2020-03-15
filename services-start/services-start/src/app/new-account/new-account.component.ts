import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../Accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(private accountService: AccountsService, private loggingService: LoggingService) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => {
        alert('New status: ' + status);
      }
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
  }
}
