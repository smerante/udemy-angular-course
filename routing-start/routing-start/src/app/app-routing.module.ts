import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuardService } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorComponent } from './error/error.component';
import { ServerResolverService } from './servers/server/server-resolver.service';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorComponent, data: {message: 'Page not found!' } },
  {
    path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent },
    ]
  },
  {
    path: 'servers',
    // canActivate:[AuthGuardService],
    canActivateChild: [AuthGuardService],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent, resolve: {server: ServerResolverService} },
      {
        path: ':id/edit', component: EditServerComponent,
        canDeactivate: [CanDeactivateGuardService]
      },
    ]
  },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, /*{useHash: true}*/)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {


}