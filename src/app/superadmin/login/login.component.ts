import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthServiceService} from '../../service/auth-service.service';
import {TokenService} from '../../service/token.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private auth:AuthServiceService, private tokenStorage: TokenService ,private route : Router) { }

  ngOnInit(): void {

  }

 
 toggleClick()
 {
  $('.login-input-bx').attr('type', 'text'); 
 }

 

}
