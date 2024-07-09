import { Routes, RouterModule } from '@angular/router';
import { provideRouter } from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";

export const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full'},
  { path: 'employees', component: EmployeeListComponent },
];

export const appRoutingProviders: any[] = [];

export const routing =[
  provideRouter(routes),
  EmployeeListComponent
]
