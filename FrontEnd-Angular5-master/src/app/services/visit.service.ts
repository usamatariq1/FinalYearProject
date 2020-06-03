import { HttpClient } from '@angular/common/http';

import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';



@Injectable()
export class VisitService {

  constructor(private myHttp: HttpClient) { }

  getVisitHistory(id) {
    return this.myHttp.get(`${environment.apiBase}/api/visits/${id}`,
    {
      withCredentials: true
    }).pipe();
  }

  addNewVisit(id, newVisit) {
    return this.myHttp.post(`${environment.apiBase}/api/visits/new/${id}`, newVisit,
    {
      withCredentials: true
    })
    .toPromise()
    .then();
  }

  getDetails(id){
    return this.myHttp.get(`${environment.apiBase}/api/visits/visit/${id}`,
    {
      withCredentials: true
    })
    .toPromise()
    .then();
  }
}
