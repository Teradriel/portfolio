import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'home', 
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    title: 'Luca Terzariol - Portfolio'
  },
  { 
    path: 'about', 
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule),
    title: 'About - Luca Terzariol'
  },
  { 
    path: 'contact', 
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule),
    title: 'Contact - Luca Terzariol'
  },
  { 
    path: 'projects', 
    loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsModule),
    title: 'Projects - Luca Terzariol'
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    useHash: true,
    initialNavigation: 'enabledBlocking' // Para SSR en el futuro
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
