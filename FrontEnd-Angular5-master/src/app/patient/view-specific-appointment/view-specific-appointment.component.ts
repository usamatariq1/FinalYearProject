import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-specific-appointment',
  templateUrl: './view-specific-appointment.component.html',
  styleUrls: ['./view-specific-appointment.component.css']
})
export class ViewSpecificAppointmentComponent implements OnInit {
  date:any=[];
  time:any=[];
  myAppointments;
  test_name;
  tests;
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


    this.getMyAppointments();
    this.getTests();
  }

  getMyAppointments(){
    this.myAuth.getMyAppointments(this.email).subscribe(
      data => { this.myAppointments = data
      let index=0;
      for (let myAppointments of this.myAppointments) {
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

  getTests(){
    this.myAuth.getTests().subscribe(
      data => { this.tests = data
      },
      err => console.error(err),
      () => console.log('done loading tests')
    );
  }

  editAppointment(){
    localStorage.setItem('AppointmentToEdit',JSON.stringify(this.test_name));
    this.myRouter.navigate(['/patient/editAppointment'])
    .catch(err => {
      console.log("Edit Err in Catch:")
      window.scroll(0,0)
    });
  }

  deleteAppointment(){
    if(this.test_name===''){
      alert("Select test name to delete its appointment");
    }
    else{
      this.myAuth.deleteAppointment({email:this.email,test_name:this.test_name});
    }
  }
}
