import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth, signInWithPopup, signOut, signInWithRedirect, GoogleAuthProvider, authState } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<any>;

  constructor(private afAuth: AngularFireAuth, private auth: Auth, private router: Router) {
    this.user$ = authState(this.auth);
  }

  googleSignIn() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider)
      .then(result => {
        this.router.navigate(['/iniciopantalla']);
      })
      .catch(error => {
        console.error(error);
      });
  }

  signOut() {
    return signOut(this.auth).then(() => {
      this.router.navigate(['/login']);
    });
  }
  
}
