import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: false,
})
export class ProjectsComponent implements OnInit {
  selectedFilter: string = 'all';

  constructor() {}

  ngOnInit(): void {}

  setFilter(filter: string): void {
    this.selectedFilter = filter;
  }

  isProjectVisible(category: string): boolean {
    if (this.selectedFilter === 'all') return true;
    return this.selectedFilter === category;
  }
}
