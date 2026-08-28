import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { TranslocoModule } from '@ngneat/transloco';
import { IntersectDirective } from '../../shared/directives/intersect.directive';

const routes: Routes = [{ path: '', component: AboutComponent }];

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    IntersectDirective,
    RouterModule.forChild(routes),
  ],
})
export class AboutModule {}
