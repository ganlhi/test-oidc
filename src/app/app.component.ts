import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/index';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <h3><a routerLink="/">Home</a> | <a routerLink="/protected">Protected</a></h3>
    <h1>{{title}}</h1>
    <ng-container *ngIf="user$ | async as user">
      <pre>{{user | json}}</pre>
      <button (click)="logout()">Logout</button>
    </ng-container>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'app';
  user$: Observable<any>;

  constructor(private _auth: AuthService, private _router: Router) {
    this.user$ = _auth.user$;
  }

  logout() {
    this._auth.startSignout();
  }
}
