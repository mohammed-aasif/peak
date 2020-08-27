import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenService} from '../service/token.service'
@Injectable()
export class TokenAuthInterceptor implements HttpInterceptor {

  constructor(private token: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const token = this.token._get_token();
    console.log("im interceptor", token)
    if(token != null){
      request = request.clone({headers : request.headers.set('Authorization','Bearer'+token)})
    }
    
    return next.handle(request);
  }
}
