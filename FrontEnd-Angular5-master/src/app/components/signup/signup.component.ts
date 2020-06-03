import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpInfo = {
    patient_id:'',
    password:'',
    firstName: '',
    lastName:'',
    address: '',
    age:'',
    gender:'',
    mobile:'',
    email:'',
    };
    baseURL = environment.apiBase;

  errorMessage: String;

  constructor( private myAuth: AuthService, private myRouter: Router) { }

  ngOnInit() {
  }

  ValidateForm() {
    var a = document.forms['frm'].email.value;
    var b = document.forms['frm'].firstName.value;
    var l = document.forms['frm'].lastName.value
    var c = document.forms['frm'].password.value;
    var d = document.forms['frm'].age.value;
    var f = document.forms['frm'].mobile.value;
    var g = document.forms['frm'].address.value;
    if (a === "" || a === "Email" || b === "" || b === "First Name" || c === "" || c === "Password" || d === "" || d === "Age" || f === "" || f === "Mobile Number" || g === "" || g === "Address" || this.signUpInfo.gender===""){
      alert('Fill all required fields');
      return false;
    }
    return true;
  }
  PatientSignUp() {
    if(this.ValidateForm()){

    this.myAuth
    .signup(this.signUpInfo)
    this.myRouter.navigate(['/login'])
    .catch(err => {
      console.log("Sign Up Err in Catch:")
      window.scroll(0,0)
    });
  }
}
}
