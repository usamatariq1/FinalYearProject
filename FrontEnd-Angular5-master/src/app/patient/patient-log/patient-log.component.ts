import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-log',
  templateUrl: './patient-log.component.html',
  styleUrls: ['./patient-log.component.css']
})
export class PatientLogComponent implements OnInit {

  date:any=[];
  time:any=[];
  patientLog;
  email;

  constructor(private myAuth: AuthService, private myRouter: Router) { }

  ngOnInit(): void {
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

    this.getPatientLog();
  }

  getPatientLog(){
    this.myAuth.viewPatientLog(this.email).subscribe(
      data => { this.patientLog = data
      let index=0;
      for (let log of this.patientLog) {
        console.log(log)
        console.log(log.date)
        this.date=log.date.split(" ")
        this.time[index]=this.date[1]
        this.date[index]=this.date[0]
        index=index+1
      }
      },
      err => console.error(err),
      () => console.log('done loading appointments')
    );
    
  }
}
