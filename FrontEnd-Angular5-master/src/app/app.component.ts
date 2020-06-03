import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app';
  pattern: String;
  // characters = [
  //   'Finn the human',
  //   'Jake the dog',
  //   'Princess bubblegum',
  //   'Lumpy Space Princess',
  //   'Beemo1',
  //   'Beemo2'
  // ];

  characters = [
    {name: 'Finn the human'},
    {name:'Jake the dog'},
    {name:'Princess bubblegum'},
    {name:'Lumpy Space Princess'},
    {name:'Beemo1'},
    {name:'Beemo2'}
  ];

  logoutError: String;

  constructor(
    private myAuth: AuthService,
    private myRouter: Router
    ){}
    
  logout(){
    this.myAuth.logout()
    .then(() => {
      this.myRouter.navigate(['/']);
    })
    .catch(()=>{
      this.logoutError = 'Error Logging Out'
    });
  }
  ngOnDestroy(){
    localStorage.clear();
  }
  
}
