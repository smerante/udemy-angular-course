import { Component } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataService: DataStorageService,
    private authService: AuthService) { }
  saveData() {
    this.dataService.storeRecipes()
      .subscribe(
        response => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataService.fetchRecipes()
      .subscribe(
        (data: any) => {
          console.log(data);
        }
      );
  }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
