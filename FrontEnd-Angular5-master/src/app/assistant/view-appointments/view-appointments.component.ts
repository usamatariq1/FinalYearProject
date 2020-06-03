import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.css']
})
export class ViewAppointmentsComponent implements OnInit {

  date:any=[];
  time:any=[];
  appointments;
  email;
  tests;
  test_name;
  test_date;

  constructor(private myAuth: AuthService, private myRouter: Router) { }

  ngOnInit(): void {
    let token= localStorage.getItem('token')
    if(token){
      let tokenDetail=JSON.parse(token)
      if(!(tokenDetail.role==="Lab Assistant" || tokenDetail.role==="Admin")){
        this.myRouter.navigate(['/login'])
      }
    }else{
      this.myRouter.navigate(['/login'])
    }

    this.getTests();
    this.getAppointments();
  }

  getTests() {
    this.myAuth.getTests().subscribe(
      data => {
      this.tests = data
        console.log(this.tests)
      },
      err => console.error(err),
      () => console.log('done loading tests')
    );
  }

  getAppointments(){
    this.myAuth.getAppointments().subscribe(
      data => { this.appointments = data
      let index=0;
      for (let myAppointments of this.appointments) {
        console.log(myAppointments)
        console.log(myAppointments.date)
        this.date=myAppointments.date.split(" ")
        this.time[index]=this.date[1]
        this.date[index]=this.date[0]
        index=index+1
      }
      },
      err => console.error(err),
      () => console.log('done loading appointments')
    );
  }
  getMyAppointments(){
    if(!(this.email==="" || this.email==="Email")){

    this.myAuth.getMyAppointments(this.email).subscribe(
      data => { this.appointments = data
      let index=0;
      for (let myAppointments of this.appointments) {
        console.log(myAppointments)
        console.log(myAppointments.date)
        this.date=myAppointments.date.split(" ")
        this.time[index]=this.date[1]
        this.date[index]=this.date[0]
        index=index+1
      }
      },
      err => {
        console.error(err)
        alert("No record found")
        this.getAppointments();
      },
      () => console.log('done loading appointments')
    );
  }
  else{
    this.getAppointments();
  }
  }

  confirmAppointment(){
    var e = document.getElementById("selectTest");
    console.log(this.test_name)
    if(this.email==="" || this.email==="Email"){
      alert("Enter email")
      return null;
    }
    if(this.test_name===""){
      alert("Select test name")
      return null;
    }
/* 
    this.myAuth.addPatientLog({email:this.email,test_name:this.test_name}) */
  }
}
