import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxTimePickerComponent } from "igniteui-angular";
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  time: any;
  appointmentInfo = {
    email: '',
    date: '',
    time: '',
    test_name: '',
  };
  baseURL = environment.apiBase;

  errorMessage: String;

  tests;
  specificTest;

  constructor(private myAuth: AuthService, private myRouter: Router) { }

  ngOnInit(): void {
    let token = localStorage.getItem('token')
    if (token) {
      let tokenDetail = JSON.parse(token)
      if (!(tokenDetail.role === "Patient")) {
        this.myRouter.navigate(['/login'])
      }
      this.appointmentInfo.email = tokenDetail.username;
    } else {
      this.myRouter.navigate(['/login'])
    }

    this.getTests();

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
  getSpecificTest(){
    if(this.appointmentInfo.test_name){
      this.myAuth.getSpecificTest(this.appointmentInfo.test_name).subscribe(
      data => { 
        this.specificTest = data
        console.log(this.specificTest)
      },
      err => console.error(err),
      () => console.log('done loading specific test record')
      );
  ``}
  }
  selectTest(){
    var a = this.appointmentInfo.test_name;
    if (a === "") {
      alert('Select Test then select time');
      return false;
    }
    console.log(this.specificTest)
    return true;
  }

  ValidateForm() {
    var a = this.appointmentInfo.date;
    var b = this.time;
    var c = this.appointmentInfo.test_name;
    if (a === "" || a === "mm/dd/yyyy" || b === "" || b === "hh:mm" || c === "") {
      alert('Fill all required fields');
      return false;
    }
    return true;
  }

  bookAppointment() {
    if(this.ValidateForm()){
      let dates = this.appointmentInfo.date.split('-')
      this.time.setDate(dates[2])
      this.time.setMonth((dates[1] as any)-1)
      this.time.setFullYear(dates[0])
      this.appointmentInfo.time=this.time;
      console.log(this.appointmentInfo.time)
      if(this.time> new Date()){
        this.myAuth.bookAppointment(this.appointmentInfo)
        this.myRouter.navigate(['/viewMyAppointments'])
        .catch(err => {
          console.log("Sign Up Err in Catch:")
          window.scroll(0,0)
        });
      }
      else{
        alert("Date you selected has already passed")
      }
    }
    else{
      alert("Fill all required fields")
    }

  }
  
}
