import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-lab-assistants',
  templateUrl: './view-lab-assistants.component.html',
  styleUrls: ['./view-lab-assistants.component.css']
})
export class ViewLabAssistantsComponent implements OnInit {

  public labAssistants;

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

    this.getLabAssistants();
  }
  getLabAssistants(){
    this.myAuth.getLabAssistants().subscribe(
      data => { this.labAssistants = data},
      err => console.error(err),
      () => console.log('done loading lab assistants')
  );
  }

}
