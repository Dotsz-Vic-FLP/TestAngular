import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // API endpoint
  private apiUrl = 'http://localhost:8080/coding/test/employees';

  // Inject HttpClient
  constructor(private http: HttpClient) { }

  // Get all employees
  getEmployees(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
}
