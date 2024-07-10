import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Title } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getRedirectResult, GoogleAuthProvider, Auth } from '@angular/fire/auth';

import { take } from 'rxjs/operators';
import { authState } from 'rxfire/auth';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  logoSrc!: string;


  constructor(
    private router: Router,
    private titleService: Title,
    private authService: AuthService,
    private afAuth: AngularFireAuth,
    private auth: Auth)
  {
    this.updateLogo();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.updateLogo.bind(this));
  }

  googleSignIn() {
    this.authService.googleSignIn();
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/iniciopantalla']);
  }

  ngOnInit() {
    this.titleService.setTitle('Ingreso | SaludYa');
    this.checkAuthState();
  }

  checkAuthState() {
    authState(this.auth).pipe(take(1)).subscribe(user => {
      if (user) {
        this.router.navigate(['/iniciopantalla']);
      }
    });

    getRedirectResult(this.auth).then((result) => {
      if (result) {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        if (user) {
          this.router.navigate(['/iniciopantalla']);
        }
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  updateLogo() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.logoSrc = 'assets/SaludYa blanco .png';
    } else {
      this.logoSrc = 'assets/SaludYa azul .png';
    }
  }
}
