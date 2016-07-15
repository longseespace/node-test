import { provideRouter, RouterConfig }  from '@angular/router';

import {
  WelcomeComponent,
  AuthRoutes,
  HomeRoutes,
  ProfileRoutes
} from './components';

const routes : RouterConfig = [
  {
    path : '',
    redirectTo : 'welcome',
    pathMatch : 'full'
  },
  {
    path : 'welcome',
    component : WelcomeComponent,
    children : [
      ...AuthRoutes,
    ]
  },
  ...HomeRoutes,
  ...ProfileRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
