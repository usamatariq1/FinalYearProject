import { HttpClient } from '@angular/common/http';

import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';



@Injectable()
export class UserService {

  constructor(private myHttp: HttpClient) { }

  getUser(id){
    return this.myHttp.get(`${environment.apiBase}/api/users/${id}`,
    {
      withCredentials: true
    }).pipe();
  }

  createClient(clientData){
      return this.myHttp.post(`${environment.apiBase}/api/users/new`,
      clientData,
      {
        withCredentials: true
      })
      .toPromise()
      .then();
  }

  getProfile(id) {
    return this.myHttp.get(`${environment.apiBase}/api/users/${id}/edit`,
  { withCredentials: true
  })
  .toPromise()
  .then();
  }

  updateUser(id, updates) {
    return this.myHttp.put(`${environment.apiBase}/api/users/${id}/edit`, updates,
  {
    withCredentials: true
  }).pipe();
  }

  deleteUser(id){
    return this.myHttp.delete(`${environment.apiBase}/api/users/${id}/delete`,
    {
      withCredentials: true
    })
    .toPromise();
   }
}
