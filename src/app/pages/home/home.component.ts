import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { NgbPopoverConfig, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [NgbPopoverConfig],
    standalone: false
})
export class HomeComponent implements OnInit {

  lang: string =this._translocoService.getActiveLang();

  constructor(private _translocoService: TranslocoService, config: NgbPopoverConfig) {
    config.placement = 'bottom';
		config.triggers = 'hover';
   }

  ngOnInit(): void {
    this._translocoService.langChanges$.subscribe((response) => {
      this.lang = response;
    });
  }

  public cvIng(): void {
    this.downloadCV('ING');
  }

  public cvDev(): void {
    this.downloadCV('DEV');
  }

  private downloadCV(type: 'ING' | 'DEV'): void {
    const suffix = type === 'DEV' ? ' (DEV)' : '';
    const langPrefix = this.lang.toUpperCase();
    const url = `assets/CV/[${langPrefix}] CV TERZARIOL LUCA${suffix}.pdf`;
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `CV_TERZARIOL_LUCA_${type}_${langPrefix}.pdf`;
    link.target = '_blank';
    link.click();
    link.remove();
  }

}
