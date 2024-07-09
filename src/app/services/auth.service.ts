import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  // Sign in with Google
  async googleSignIn() {
    try {
      const provider = new GoogleAuthProvider();
      const credential = await this.afAuth.signInWithPopup(provider);
      console.log('Google sign-in successful:', credential);
    } catch (error) {
      console.error('Error during Google sign-in:', error);
    }
  }

  // Sign out
  async signOut() {
    try {
      await this.afAuth.signOut();
      console.log('Sign-out successful');
    } catch (error) {
      console.error('Error during sign-out:', error);
    }
  }
}
