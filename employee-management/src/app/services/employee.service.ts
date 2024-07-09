import { Injectable } from '@angular/core';
import { Employee } from "../models/employee";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/coding/test/employees';

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<Employee[]>('${this.baseUrl}/all');
  }

  updateEmployee(id: number, employee: Employee){
    return this.http.put('${this.baseUrl}/update/${id}', employee);
  }
}
