import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {

  appointmentInfo = {
    email:'',
    date:'',
    time: '',
    test_name:'',
    };
  time:any=''
  public errorMessage;

  constructor(private myAuth: AuthService, private myRouter: Router) { }

  ngOnInit(): void {
    let tokenDetail;
    let token= localStorage.getItem('token')
    if(token){
      tokenDetail=JSON.parse(token)
      if(!(tokenDetail.role==="Patient")){
        this.myRouter.navigate(['/login'])
      }
      this.appointmentInfo.email=tokenDetail.username;
    }
    else{
      this.myRouter.navigate(['/login'])
    }

    let tokenTestName= localStorage.getItem('AppointmentToEdit')
    if(tokenTestName){
      let test=JSON.parse(tokenTestName)
      this.appointmentInfo.test_name=test;
    }
  }

  
  ValidateForm() {
    var a = this.appointmentInfo.date;
    var b = this.time;
    if (a === "" || a === "mm/dd/yyyy" || b === "" || b === "hh:mm") {
      alert('Fill all required fields');
      return false;
    }
    return true;
  }


  editAppointment(){
    if(this.ValidateForm()){
      let dates = this.appointmentInfo.date.split('-')
      this.time.setDate(dates[2])
      this.time.setMonth((dates[1] as any)-1)
      this.time.setFullYear(dates[0])
      this.appointmentInfo.time=this.time;
      console.log(this.appointmentInfo.time)
      console.log(this.appointmentInfo.test_name)
      
      if(this.time>new Date()){
        this.myAuth
        .editAppointment(this.appointmentInfo)
        this.myRouter.navigate(['/myAppointments'])
        .catch(err => {
          console.log("Edit Err in Catch:")
          window.scroll(0,0)
        });
      }
      else{
        alert("Date you selected has already passed")
      }
    }
    localStorage.removeItem('AppointmentToEdit')
  }

}
