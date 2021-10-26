import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class JobRepositoryServiceService {

  constructor(private http: HttpClient) {  
   }

   getJobs (): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:3000/jobs");
  }
}
