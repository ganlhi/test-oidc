import { UserManagerSettings, WebStorageStateStore } from 'oidc-client';

export const clientSettings: UserManagerSettings = {
  authority: 'http://det1ihdpapp02.int.tdc:10414',
  client_id: 'MyClient3',
  redirect_uri: 'http://localhost:4200/auth-callback',
  post_logout_redirect_uri: 'http://localhost:4200',
  response_type: 'id_token token',
  scope: 'openid profile MyClient3.Api',
  filterProtocolClaims: true,
  loadUserInfo: true,
  userStore: new WebStorageStateStore({ store: window.localStorage }),
};
