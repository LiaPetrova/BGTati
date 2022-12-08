import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, from, map, Observable, Subject } from 'rxjs';
import { IUser } from './core/interfaces';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { signOut } from '@firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  currentUser$ = authState(this.auth);

  isLoggedIn$ = this.currentUser$.pipe(map(user => !!user));


  constructor(private auth: Auth) { }

  login$(email: string, password: string): Observable<unknown> {
    return from(signInWithEmailAndPassword(this.auth, email, password))
  }

  register$(email: string, password: string): Observable<unknown> {
    return from(createUserWithEmailAndPassword(this.auth, email, password))
  }

  logout() {
    return from(signOut(this.auth));
  }

}
