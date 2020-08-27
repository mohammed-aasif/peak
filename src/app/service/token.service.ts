import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }


  _save_token(token : string){
    sessionStorage.removeItem('Token')
    sessionStorage.setItem('Token', token)
  }
  _get_token(){
   // get token here
   return sessionStorage.getItem('Token')
  }
  _save_userRole(user_role: string){
    sessionStorage.setItem('user_Role', user_role )
  }
  _get_userRole(user_role: string){
    //get user role
    sessionStorage.getItem('user_Role')
  }
  _logout(){
    // logout logic goes here
  }
}
