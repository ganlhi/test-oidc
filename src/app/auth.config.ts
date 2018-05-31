import { UserManagerSettings, WebStorageStateStore } from 'oidc-client';

export const clientSettings: UserManagerSettings = {
  authority: 'http://localhost:10414',
  client_id: 'MyClient',
  redirect_uri: 'http://localhost:4200/auth-callback',
  post_logout_redirect_uri: 'http://localhost:4200',
  response_type: 'id_token token',
  scope: 'openid profile MyClient.Api',
  filterProtocolClaims: true,
  loadUserInfo: true,
  userStore: new WebStorageStateStore({ store: window.localStorage }),
};
