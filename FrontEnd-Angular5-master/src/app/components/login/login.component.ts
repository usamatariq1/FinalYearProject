import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myAuth: AuthService, private myRouter: Router) { }
  
  public loginInfo:any={
    email:'',
    password:'',
    role:''
  }

  user: any; 

  loginErrorMessage: String;

  ngOnInit() {
    let token = localStorage.getItem('token')
    if(token){
      let tokenDetail= JSON.parse(token);
      if(tokenDetail.role==="Patient"){
        this.myRouter.navigate(['/patient'])
      }
      else if(tokenDetail.role==="Lab Assistant"){
        this.myRouter.navigate(['/assistant'])
      }
      else if(tokenDetail.role==="Admin"){
        this.myRouter.navigate(['/admin'])
      }
    }
  }

  doLogin() {
    console.log("Do login")
    console.log(this.loginInfo)
    this.myAuth.login(this.loginInfo).subscribe(
      data=>{
        console.log(data)
        localStorage.setItem('token', JSON.stringify(data))
        this.ngOnInit()
      },
      error =>{
        alert("Invalid credentials")
        console.log(error)
      },
      () =>{console.log("Do Login function ends")}
    );

  }

  forgotPassword() {
    alert('Password has been sent to your email')
    this.myAuth.forgotPassword(this.loginInfo)
  }
}
