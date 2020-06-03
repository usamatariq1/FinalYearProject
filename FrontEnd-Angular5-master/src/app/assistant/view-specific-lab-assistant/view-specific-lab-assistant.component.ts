import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-specific-lab-assistant',
  templateUrl: './view-specific-lab-assistant.component.html',
  styleUrls: ['./view-specific-lab-assistant.component.css']
})
export class ViewSpecificLabAssistantComponent implements OnInit {

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
      if(!(tokenDetail.role==="Lab Assistant")){
        this.myRouter.navigate(['/login'])
      }
      this.email=tokenDetail.username;
    }else{
      this.myRouter.navigate(['/login'])
    }
    
    this.getSpecificLabAssistant()
  }

  getSpecificLabAssistant(){
    this.myAuth.getSpecificLabAssistant(this.email).subscribe(
    data => { this.LabAssistantInfo = data},
    err => console.error(err),
    () => console.log('done loading lab assistant record')
    );
  }

  deleteLabAssistant(){
    if(this.email===''){
      alert("Enter email to delete");
    }
    else{
      this.myAuth.deleteLabAssistant(this.email);
      this.myRouter.navigate(['./login'])
      .catch(err => {
        console.log("Edit Err in Catch:")
        window.scroll(0,0)
      });
    }
  }
}
