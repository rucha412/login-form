import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fireAuth:  AngularFireAuth) { }

  signInWithGoogle(): any{
    return this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  signOut(){
    return this.fireAuth.signOut();
  }
}
