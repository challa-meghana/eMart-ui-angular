import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { EmartService } from 'src/app/emart.service';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
sign:string;
errorMessage:string;
  username: string;
  password: string;

  constructor(protected emartService:EmartService, protected loginService:LoginService,protected router:Router) { }

  ngOnInit(): void {
    this.errorMessage="";
  }
 validate(){
   if(this.sign=="buyer"){
     let result = this.emartService.validateBuyer(this.username,this.password );
     if(result!=null){
       //this.loginService.loginBuyer(result);
       this.router.navigate(['/item-list']);
     }
     else{
          this.errorMessage="invalid";
     }
   }
   if(this.sign == 'seller'){
    let result = this.emartService.validateSeller(this.username, this.password);
    if(result != null){
      this.loginService.loginSeller(result);
      this.router.navigate(['item-list']);
    }
    else{
      this.errorMessage = "Invalid Username/Password";
    }
  }
 }
  
}
