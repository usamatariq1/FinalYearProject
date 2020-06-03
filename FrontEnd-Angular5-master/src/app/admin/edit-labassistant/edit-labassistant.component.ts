import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-edit-labassistant',
  templateUrl: './edit-labassistant.component.html',
  styleUrls: ['./edit-labassistant.component.css']
})
export class EditLabassistantComponent implements OnInit {

  LabAssistantInfo:any = {
    lab_assistant_id:'',
    name:{
      firstName: '',
      lastName:''
    },
    address: '',
    age:'',
    gender:'',
    mobile_number:'',
    email:'',
    };
  public email;
  public errorMessage;

  constructor(private myAuth: AuthService, private myRouter: Router) { }

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
  getSpecificLabAssistant(){
    if(this.email===''){
      alert("Enter Email ");
    }
    else{
      console.log(this.email)
    this.myAuth.getSpecificLabAssistant(this.email).subscribe(
      data => { this.LabAssistantInfo = data},
      err => console.error(err),
      () => console.log('done loading lab assistant')
    );
    }
  }
  EditLabAssistant(){
    if(this.email===''){
      alert("Select lab assistant record to edit");
    }
    else{
      this.myAuth
      .editLabAssistant(this.LabAssistantInfo)
      this.myRouter.navigate(['/viewLabAssistants'])
      .catch(err => {
        console.log("Edit Err in Catch:")
        window.scroll(0,0)
      });
    }
  }

}
