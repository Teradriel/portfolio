import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: false
})
export class HeaderComponent implements OnInit {

  constructor(private _translocoService: TranslocoService) { }

  ngOnInit(): void {
  }

  clickTranslate(language: string): void{
    this._translocoService.setActiveLang(language)
  }

}
