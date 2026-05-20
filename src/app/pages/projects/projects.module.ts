import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { TranslocoModule } from '@ngneat/transloco';
import { IntersectDirective } from '../../shared/directives/intersect.directive';

const routes: Routes = [{ path: '', component: ProjectsComponent }];

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    IntersectDirective,
    RouterModule.forChild(routes),
  ],
})
export class ProjectsModule {}
