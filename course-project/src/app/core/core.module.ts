import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { RecipeService } from '../recipe/recipe.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../auth/auth.interceptor';
import { LoggingInterceptor } from '../auth/logging.interceptor';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports:[
    AppRoutingModule,
    HeaderComponent
  ],
  //will provide services properly as long as core module is loaded eagerly
  providers: [RecipeService,
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}, //Instead of using @Injector({providedIn: 'root'}), also provides one of the same instance
  {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}]
})
export class CoreModule { }