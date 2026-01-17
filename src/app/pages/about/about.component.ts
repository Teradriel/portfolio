import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    standalone: false
})
export class AboutComponent implements OnInit {
  lang: string =this._translocoService.getActiveLang();
  url =""
  constructor(private _translocoService: TranslocoService) { }

  ngOnInit(): void {
    this._translocoService.langChanges$.subscribe((response) => {
      this.lang = response
    })}

  public key(){
    if (this.lang === "en") {
      let link = document.createElement('a')
      link.href = 'https://en.wikipedia.org/wiki/Keystone_(architecture)'
      link.target ='_blank'
      link.click()
    }
    if(this.lang === "it"){
      let link = document.createElement('a')
      link.href = 'https://it.wikipedia.org/wiki/Chiave_di_volta'
      link.target ='_blank'
      link.click()
    }
    if(this.lang === "es"){
      let link = document.createElement('a')
      link.href = 'https://es.wikipedia.org/wiki/Clave_(arquitectura)'
      link.target ='_blank'
      link.click()
    }
  }

}
