import { Component } from '@angular/core';
import { Observable } from 'rxjs/index';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <h3><a routerLink="/">Home</a> | <a routerLink="/protected">Protected</a></h3>
    <h1>{{title}}</h1>
    <pre *ngIf="user$ | async as user">{{user | json}}</pre>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'app';
  user$: Observable<any>;

  constructor(private _auth: AuthService) {
    this.user$ = _auth.user$;
  }
}
