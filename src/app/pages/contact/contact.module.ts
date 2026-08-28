import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { TranslocoModule } from '@ngneat/transloco';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IntersectDirective } from '../../shared/directives/intersect.directive';

const routes: Routes = [{ path: '', component: ContactComponent }];

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslocoModule,
    FontAwesomeModule,
    IntersectDirective,
    RouterModule.forChild(routes),
  ],
})
export class ContactModule {}
