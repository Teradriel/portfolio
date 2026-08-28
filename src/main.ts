import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withHashLocation, Routes } from '@angular/router';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { TranslocoRootModule } from './app/transloco-root.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./app/pages/home/home.module').then((m) => m.HomeModule),
    title: 'Luca Terzariol - Portfolio',
    data: { animation: 'Home' },
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./app/pages/about/about.module').then((m) => m.AboutModule),
    title: 'About - Luca Terzariol',
    data: { animation: 'About' },
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./app/pages/contact/contact.module').then((m) => m.ContactModule),
    title: 'Contact - Luca Terzariol',
    data: { animation: 'Contact' },
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./app/pages/projects/projects.module').then(
        (m) => m.ProjectsModule,
      ),
    title: 'Projects - Luca Terzariol',
    data: { animation: 'Projects' },
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' as const },
  { path: '**', redirectTo: 'home' },
];

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes, withHashLocation()),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(TranslocoRootModule, NgbModule, FontAwesomeModule),
  ],
}).catch((err) => console.error(err));
