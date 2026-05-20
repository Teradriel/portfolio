import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import {
  trigger,
  transition,
  style,
  animate,
  query,
} from '@angular/animations';

const routeFade = trigger('routeAnimations', [
  transition('* <=> *', [
    query(
      ':enter',
      [style({ opacity: 0 }), animate('180ms ease', style({ opacity: 1 }))],
      { optional: true },
    ),
  ]),
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, RouterOutlet, HeaderComponent, FooterComponent],
  animations: [routeFade],
})
export class AppComponent {
  title = 'portfolio';

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
