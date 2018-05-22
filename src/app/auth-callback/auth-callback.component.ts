import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth-callback',
  template: '',
  styles: [],
})
export class AuthCallbackComponent implements OnInit {

  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {
    this._auth.completeAuthentication().then(() => {
      this._router.navigateByUrl('/');
    });
  }

}
