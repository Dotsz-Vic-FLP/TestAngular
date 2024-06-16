import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{
  employees: any[] = [];

  constructor(private employeeService: EmployeeService) {
    console.log('EmployeeListComponent constructor called');
  }

  ngOnInit(): void {
    console.log('EmployeeListComponent ngOnInit called')
    this.employeeService.getEmployees().subscribe( data => {
      console.log('Data from API: ', data);
      this.employees = data;
    });
  }

}
