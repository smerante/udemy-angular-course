import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private authService: AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    
    const token = this.authService.retrieveToken();
    let updateReq = req.clone({
      params: req.params.append('auth',token)
    });

    console.log('intercepting: ' , updateReq);
    return next.handle(updateReq);
  }
}