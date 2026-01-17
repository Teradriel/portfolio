//Angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Routing imports
import { AppRoutingModule } from './app-routing.module';

//Component imports
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

//Style imports
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({ 
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    TranslocoRootModule
  ], 
  providers: [provideHttpClient(withInterceptorsFromDi())] 
})
export class AppModule {}
