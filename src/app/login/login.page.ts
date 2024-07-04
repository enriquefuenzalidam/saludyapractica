import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  logoSrc!: string;


  constructor() {
    this.updateLogo();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.updateLogo.bind(this));
  }

  ngOnInit() {
  }
  updateLogo() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.logoSrc = 'assets/SaludYa blanco .png';
    } else {
      this.logoSrc = 'assets/SaludYa azul .png';
    }
  }
}
