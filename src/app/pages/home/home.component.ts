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
      this.lang = response
    })

    }

  public cvIng(){
    if (this.lang === "en") {
      let link = document.createElement('a')
      link.href = '../../../assets/CV/[EN] CV TERZARIOL LUCA.pdf'
      link.click()
    }
    if(this.lang === "it"){
      let link = document.createElement('a')
      link.href = '../../../assets/CV/[IT] CV TERZARIOL LUCA.pdf'
      link.click()
    }
    if(this.lang === "es"){
      let link = document.createElement('a')
      link.href = '../../../assets/CV/[ES] CV TERZARIOL LUCA.pdf'
      link.click()
    }  
  }

  public cvDev(){
    if (this.lang === "en") {
      let link = document.createElement('a')
      link.href = '../../../assets/CV/[EN] CV TERZARIOL LUCA (DEV).pdf'
      link.click()
    }
    if(this.lang === "it"){
      let link = document.createElement('a')
      link.href = '../../../assets/CV/[IT] CV TERZARIOL LUCA (DEV).pdf'
      link.click()
    }
    if (this.lang === "es"){
      let link = document.createElement('a')
      link.href = '../../../assets/CV/[ES] CV TERZARIOL LUCA (DEV).pdf'
      link.click()
    }
  }

}
