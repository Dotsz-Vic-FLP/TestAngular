import {Component, OnInit} from '@angular/core';
import {Employee} from "../models/employee";
import {HttpClient} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.http.get<Employee[]>('http://localhost:8080/coding/test/employees')
      .subscribe(
        (data: Employee[]) => {
        console.log('Data fetched:', data);
        this.employees = data;
        },
        error => {console.error('Error fetching employees', error)});
  }
}
