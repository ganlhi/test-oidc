import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { ProtectedComponent } from './protected/protected.component';
import { AuthService } from './services/auth.service';

export function loadUserOnInit(auth: AuthService) {
  return () => auth.checkUser();
}

@NgModule({
  declarations: [
    AppComponent,
    ProtectedComponent,
    AuthCallbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: APP_INITIALIZER, multi: true, deps: [AuthService], useFactory: loadUserOnInit },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
