import { Component } from '@angular/core';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, EmployeeListComponent],
  template: `
    <main>
      <header class="brand-name">
<!--        <img class="brand-logo" src="../homelogo.svg" alt="logo" aria-hidden="true" />-->
        <h1> SpringBoot + Angular</h1>
      </header>
      <section class="content">
        <h2>Sample Data pulled from a REST API</h2>
        <app-employee-list></app-employee-list>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
