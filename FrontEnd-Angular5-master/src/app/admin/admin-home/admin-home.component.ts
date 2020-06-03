import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private myRouter:Router) { }

  ngOnInit(): void {
    let tokenDetail;
    let token= localStorage.getItem('token')
    if(token){
      tokenDetail=JSON.parse(token)
      if(!(tokenDetail.role==="Admin")){
        this.myRouter.navigate(['/login'])
      }
    }
    else{
      this.myRouter.navigate(['/login'])
    }
  }
  
  delete(){
    
  }

  logOut(){
    localStorage.clear()
    this.myRouter.navigate(['/login'])
  }

}
