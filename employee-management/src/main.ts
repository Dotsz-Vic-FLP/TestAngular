import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideHttpClient} from "@angular/common/http";
import {appRoutingProviders, routing} from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    appRoutingProviders, ...routing
  ]
}).catch((err) => console.error(err));
