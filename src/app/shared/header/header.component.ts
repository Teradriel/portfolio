import { Component, OnInit, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoService, TranslocoModule } from '@ngneat/transloco';
import { CommonModule } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, TranslocoModule, NgbNavModule],
})
export class HeaderComponent implements OnInit {
  scrolled = false;

  constructor(private _translocoService: TranslocoService) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.scrolled = window.scrollY > 20;
  }

  clickTranslate(language: string): void {
    this._translocoService.setActiveLang(language);
  }
}
