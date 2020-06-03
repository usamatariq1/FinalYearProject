import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public patientInfo:any = {
    _id:'',
    username:'',
    password:'',
    role:'',
  };
  password_1='';
  password_2='';

  public errorMessage;
  tokenDetail;
  constructor(private myAuth: AuthService, private myRouter: Router) { }

  ngOnInit(): void {
    let token= localStorage.getItem('token')
    if(token){
      this.tokenDetail=JSON.parse(token)
      if(!(this.tokenDetail.role==="Patient")){
        this.myRouter.navigate(['/login'])
      }
      else{
        this.patientInfo._id=this.tokenDetail._id;
        this.patientInfo.username=this.tokenDetail.username;
        this.patientInfo.role=this.tokenDetail.role;
      }
    }
    else{
      this.myRouter.navigate(['/login'])
    }
  }

  ValidateForm() {
    var a = this.password_1;
    var b = this.password_2;
    if (a === "" || a === "Password" || b === "" || b === "Password"){
      alert('Fill all required fields');
      return false;
    }
    else if(!(a===b)){
      alert('Passwords does not match');
    }
    return true;
  }

  changePassword(){
    if(this.ValidateForm){
      this.patientInfo.password=this.password_1
      this.myAuth.changePassword(this.patientInfo)
      this.tokenDetail.password=this.password_1;
      localStorage.removeItem('token')
      localStorage.setItem('token',JSON.stringify(this.tokenDetail))
      this.myRouter.navigate(['/viewSpecificPatient'])
      .catch(err => {
        console.log("Edit Err in Catch:")
        window.scroll(0,0)
      });
    }
  }

}
