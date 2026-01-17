//Angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Form imports
import { ReactiveFormsModule } from '@angular/forms';

//Routing imports
import { AppRoutingModule } from './app-routing.module';

//Component imports
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

//Style imports
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({ declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ProjectsComponent,
        ContactComponent,
        HeaderComponent,
        FooterComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        NgbModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        TranslocoRootModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
