import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { TranslocoModule } from '@ngneat/transloco';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    NgbPopoverModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
