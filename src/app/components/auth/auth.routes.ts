import { RouterConfig }  from '@angular/router';
import {
  AuthComponent,
  AuthLoginComponent,
  AuthPasswordComponent,
  AuthProfileComponent,
  AuthRegisterComponent
} from './';

export const AuthRoutes : RouterConfig = [
  { path : '' },
  {
    path : 'auth',
    component : AuthComponent,
    children : [
      {
        path : '',
        redirectTo : 'login',
        pathMatch : 'full',
      },
      {
        path : 'login',
        component : AuthLoginComponent
      },
      {
        path : 'password',
        component : AuthPasswordComponent
      },
      {
        path : 'profile',
        component : AuthProfileComponent
      },
      {
        path : 'register',
        component : AuthRegisterComponent
      },
    ]
  }
]
