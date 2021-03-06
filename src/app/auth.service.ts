import { Auth, signInWithEmailAndPassword,
    createUserWithEmailAndPassword ,signOut} from '@angular/fire/auth';
   

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  login({ email, password }: LoginData) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  register({ email, password }: LoginData) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }
}

export interface LoginData {
    email: string;
    password: string;
  }