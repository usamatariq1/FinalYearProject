import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-add-labassistant',
  templateUrl: './add-labassistant.component.html',
  styleUrls: ['./add-labassistant.component.css']
})
export class AddLabassistantComponent implements OnInit {
  LabAssistantInfo = {
    lab_assistant_id:'',
    password:'',
    firstName: '',
    lastName:'',
    address: '',
    age:'',
    gender:'',
    mobile_number:'',
    email:'',
    };
    baseURL = environment.apiBase;

    errorMessage: String;
  
    constructor( private myAuth: AuthService, private myRouter: Router) { }

  ngOnInit(): void {
    let token= localStorage.getItem('token')
    if(token){
      let tokenDetail=JSON.parse(token)
      if(!(tokenDetail.role==="Admin")){
        this.myRouter.navigate(['/login'])
      }
    }else{
      this.myRouter.navigate(['/login'])
    }
  }

  ValidateForm() {
    var a = document.forms['frm'].email.value;
    var b = document.forms['frm'].firstName.value;
    var l = document.forms['frm'].lastName.value
    var c = document.forms['frm'].password.value;
    var d = document.forms['frm'].age.value;
    var f = document.forms['frm'].mobile_number.value;
    var g = document.forms['frm'].address.value;
    if (a === "" || a === "Email" || b === "" || b === "First Name" || c === "" || c === "Password" || d === "" || d === "Age" || f === "" || f === "Mobile Number" || g === "" || g === "Address" || this.LabAssistantInfo.gender===""){
      alert('Fill all required fields');
      return false;
    }
    return true;
  }
  AddLabAssistant(){
    if(this.ValidateForm()){

      this.myAuth
      .addLabAssistant(this.LabAssistantInfo)
      this.myRouter.navigate(['/'])
      .catch(err => {
        console.log("Sign Up Err in Catch:")
        window.scroll(0,0)
      });
    }
    else{
      console.log("Error in labAssistant")
    }
  }

}
