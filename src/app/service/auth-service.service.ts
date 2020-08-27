import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private  actionUrl  : string;
 
 
  constructor( private http: HttpClient,private router: Router) {
   this.actionUrl = environment.apiUrl;
   console.log(this.actionUrl,"url");
   }

  _login_service(credentials:any) {
   
    return this.http.post(this.actionUrl+'/Login' ,credentials);
  }
   
  _forgot_password(email: any){
    return this.http.post(this.actionUrl+'/Accounts/ForgotPassword', email)
  }
  
  _reset_password(credentials:any){
    return this.http.post(this.actionUrl+'/Accounts/ResetPassword',credentials)
  }
  _register_service(){
  // register service go here
  }
}
