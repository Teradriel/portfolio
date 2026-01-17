import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { TranslocoModule } from '@ngneat/transloco';

const routes: Routes = [
  { path: '', component: ProjectsComponent }
];

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectsModule { }
