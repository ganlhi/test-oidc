import { Injectable } from '@angular/core';
import { User, UserManager } from 'oidc-client';
import { BehaviorSubject, Observable } from 'rxjs/index';
import { clientSettings } from '../auth.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private _manager = new UserManager(clientSettings);
  private _user$ = new BehaviorSubject<User>(undefined);

  get user$(): Observable<User> {
    return this._user$.asObservable();
  }

  get user(): User {
    return this._user$.getValue();
  }

  checkUser() {
    this._manager.getUser().then(user => {
      console.log({ user });
      this._user$.next(user);
    }, () => { console.error('NO USER'); });
  }

  isLoggedIn(): boolean {
    return this.user && !this.user.expired;
  }

  getClaims(): any {
    return this.user ? this.user.profile : undefined;
  }

  getAuthorizationHeaderValue(): string {
    return this.user
      ? `${this.user.token_type} ${this.user.access_token}`
      : undefined;
  }

  startAuthentication(): Promise<void> {
    return this._manager.signinRedirect();
  }

  completeAuthentication(): Promise<void> {
    return this._manager.signinRedirectCallback().then(user => {
      this._user$.next(user);
    });
  }
}
