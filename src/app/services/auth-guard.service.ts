import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private _auth: AuthService) {}

  canActivate(): boolean {
    console.log({ isLoggedIn: this._auth.isLoggedIn() });
    if (this._auth.isLoggedIn()) {
      return true;
    }

    this._auth.startAuthentication();
    return false;
  }
}
