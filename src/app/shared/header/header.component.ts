import { Component, OnInit, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoService, TranslocoModule } from '@ngneat/transloco';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, TranslocoModule],
})
export class HeaderComponent implements OnInit {
  scrolled = false;
  mobileMenuOpen = false;
  activeLang = 'es';

  constructor(private _translocoService: TranslocoService) {}

  ngOnInit(): void {
    this.activeLang = this._translocoService.getActiveLang() || 'es';
    this._translocoService.langChanges$.subscribe((lang) => {
      this.activeLang = lang;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.scrolled = window.scrollY > 20;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  clickTranslate(language: string): void {
    this._translocoService.setActiveLang(language);
  }
}
