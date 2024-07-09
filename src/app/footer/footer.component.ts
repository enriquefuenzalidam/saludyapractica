import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }
  onClick(route: string) {
    console.log(`Navigating to ${route}`);
  }
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
