import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assistant',
  templateUrl: './assistant.component.html',
  styleUrls: ['./assistant.component.css']
})
export class AssistantComponent implements OnInit {

  constructor(private myAuth: AuthService, private myRouter: Router) { }

  ngOnInit(): void {
  }

  deleteTest(){
    
  }
  logOut(){
    localStorage.clear()
    this.myRouter.navigate(['/login'])
  }
}
