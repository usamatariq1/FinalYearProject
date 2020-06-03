import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {

  TestInfo = {
    test_name: '',
    test_description:'',
    bill: '',
    test_time:'',
    test_frequency:''
    };
    baseURL = environment.apiBase;

    errorMessage: String;

  constructor( private myAuth: AuthService, private myRouter: Router) { }

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

  ValidateForm() {
    var a = document.forms['frm'].test_name.value;
    var b = document.forms['frm'].test_description.value;
    var c = document.forms['frm'].bill.value;
    var d = document.forms['frm'].test_time.value;
    var e = document.forms['frm'].test_frequency.value;
    if (a === "" || a === "Test Name" || b === "" || b === "Test Description" || c === "" || c === "bill" || d === "" || d === "Test Time" || e === "" || e === "Test Frequency"){
      alert('Fill all required fields');
      return false;
    }
    return true;
  }
  AddTest(){
    if(this.ValidateForm()){

      this.myAuth
      .addTest(this.TestInfo)
      this.myRouter.navigate(['/admin/viewTests'])
      .catch(err => {
        console.log("Err in Catch:")
        window.scroll(0,0)
      });
    }
    else{
      console.log("Error in adding test")
    }
  }
}
