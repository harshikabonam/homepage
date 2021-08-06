import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataflowService {
  constructor(private http: HttpClient) {
   }

   getSmartphone(data) {
    return this.http.post('https://collabgenics-api.herokuapp.com/api/search',data);

  }
}
