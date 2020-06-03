import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-edit-test',
  templateUrl: './edit-test.component.html',
  styleUrls: ['./edit-test.component.css']
})
export class EditTestComponent implements OnInit {

  public tests
  public test_name

  public errorMessage;

  TestInfo:any = [{
    test_name: '',
    test_description:'',
    bill: '',
    test_time:'',
    test_frequency:''
    }];

  constructor(private myAuth: AuthService, private myRouter: Router) { }

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

    this.getTests()
  }
  getTests(){
    this.myAuth.getTests().subscribe(
      data => { this.tests = data
      },
      err => console.error(err),
      () => console.log('done loading tests')
  );
  }

  getSpecificTest(){
    if(this.test_name===''){
      alert("Select test to view detail");
    }
    else{
      this.myAuth.getSpecificTest(this.test_name).subscribe(
      data => { this.TestInfo = data },
      err => console.error(err),
      () => console.log('done loading specific test record')
    );
    }
  }
  EditTest(){
    if(this.test_name===''){
      alert("Select Test to edit");
    }
    else{
      this.myAuth
      .editTest(this.TestInfo)
      this.myRouter.navigate(['/admin/viewTests'])
      .catch(err => {
        console.log("Edit Err in Catch:")
        window.scroll(0,0)
      });
    }
  }
}
