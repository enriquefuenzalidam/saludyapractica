import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  logoSrc!: string;


  constructor(private router: Router) {
    this.updateLogo();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.updateLogo.bind(this));
  }


  onSubmit(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/iniciopantalla']);
  }

  ngOnInit() { }

  updateLogo() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.logoSrc = 'assets/SaludYa blanco .png';
    } else {
      this.logoSrc = 'assets/SaludYa azul .png';
    }
  }
}
