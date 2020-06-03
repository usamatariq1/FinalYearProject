import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  public patientInfo:any = {
    patient_id:'',
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

  ngOnInit(){
    let token= localStorage.getItem('token')
    if(token){
      let tokenDetail=JSON.parse(token)
      if(!(tokenDetail.role==="Patient")){
        this.myRouter.navigate(['/login'])
      }
      this.email=tokenDetail.username;
    }
    else{
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
editPatient(){
  if(this.email===''){
    alert("Select patient record to edit");
  }
  else{
    this.myAuth
    .editPatient(this.patientInfo)
    this.myRouter.navigate(['/viewSpecificPatient'])
    .catch(err => {
      console.log("Edit Err in Catch:")
      window.scroll(0,0)
    });
  }
}

}
