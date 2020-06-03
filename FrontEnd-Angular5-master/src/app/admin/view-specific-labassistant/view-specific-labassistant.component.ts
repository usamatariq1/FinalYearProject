import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-specific-labassistant',
  templateUrl: './view-specific-labassistant.component.html',
  styleUrls: ['./view-specific-labassistant.component.css']
})
export class ViewSpecificLabassistantComponent implements OnInit {

  LabAssistantInfo:any = {
    lab_assistant_id:'',
    password:'',
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

  public email='';
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
      this.myAuth.getSpecificLabAssistant(this.email).subscribe(
      data => { this.LabAssistantInfo = data},
      err => console.error(err),
      () => console.log('done loading lab assistant record')
    );
    }
  }
  deleteLabAssistant(){
    if(this.email===''){
      alert("Enter email to delete");
    }
    else{
      this.myAuth.deleteLabAssistant(this.email);
      this.myRouter.navigate(['./admin/viewSpecificLabAssistant'])
      .catch(err => {
        console.log("Edit Err in Catch:")
        window.scroll(0,0)
      });
    }
  }
}
