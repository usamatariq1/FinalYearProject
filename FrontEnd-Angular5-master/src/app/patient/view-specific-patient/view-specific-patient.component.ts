import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-specific-patient',
  templateUrl: './view-specific-patient.component.html',
  styleUrls: ['./view-specific-patient.component.css']
})
export class ViewSpecificPatientComponent implements OnInit {

  public patientInfo:any={
    name:{
      firstName:'',
      lastName:''
    },
    email:'',
    mobile_number:'',
    gender:'',
    age:'',
    address:''
  };
  public email='';
  public errorMessage;
  
  constructor(private myAuth: AuthService, private myRouter: Router) { }

  ngOnInit(){
    let token= localStorage.getItem('token')
    if(token){
      let tokenDetail=JSON.parse(token)
      if(!(tokenDetail.role==="Patient")){
        this.myRouter.navigate(['/login'])
      }
      this.email=tokenDetail.username;
    }else{
      this.myRouter.navigate(['/login'])
    }
    
    this.getSpecificPat()
  }
  getSpecificPat(){

    this.myAuth.getSpecificPatient(this.email).subscribe(
    data => { this.patientInfo = data},
    err => console.error(err),
    () => console.log('done loading patient')
    );
  }
  
}
