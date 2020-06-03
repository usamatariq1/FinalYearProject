import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent implements OnInit {

  constructor(private myRouter:Router) { }

  ngOnInit(): void {
    let tokenDetail;
    let token= localStorage.getItem('token')
    if(token){
      tokenDetail=JSON.parse(token)
      if(!(tokenDetail.role==="Patient")){
        this.myRouter.navigate(['/login'])
      }
    }
    else{
      this.myRouter.navigate(['/login'])
    }
  }
  deletePatient(){
    
  }
  

  logOut(){
    localStorage.clear()
    this.myRouter.navigate(['/login'])
  }
}
