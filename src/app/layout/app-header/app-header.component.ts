import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  headerMenu = [
    { title: 'Home', icon: 'home', link: 'home'},
    { title: 'Todos', icon: 'list', link: 'todos'},
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  goTo(link: string) {
    this.router.navigate([link]);
  }
}
