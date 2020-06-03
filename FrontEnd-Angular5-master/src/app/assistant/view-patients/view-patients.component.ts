import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.component.html',
  styleUrls: ['./view-patients.component.css']
})
export class ViewPatientsComponent implements OnInit {
  
  public patients;
  constructor(private myAuth: AuthService, private myRouter: Router) { }

  ngOnInit(){
    let token= localStorage.getItem('token')
    if(token){
      let tokenDetail=JSON.parse(token)
      if(!(tokenDetail.role==="Lab Assistant")){
        this.myRouter.navigate(['/login'])
      }
    }else{
      this.myRouter.navigate(['/login'])
    }

    this.getPats();
  }
  getPats(){
    this.myAuth.getPatients().subscribe(
            data => { this.patients = data},
            err => console.error(err),
            () => console.log('done loading patients')
        );
      
  }

}

