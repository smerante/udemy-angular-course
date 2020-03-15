import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../Accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(private loggingService: LoggingService,
    private accountsService: AccountsService) { }

  onSetTo(status: string) {
    this.accountsService.statusUpdated.emit(status);
    this.accountsService.updateAccount(this.id, status);
  }
}
