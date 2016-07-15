import { Component, ViewContainerRef } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {
  AuthService,
  ProfileService,
  UserService
} from './components';

@Component({
  moduleId: module.id,
  selector: 'cz-app',
  templateUrl: 'app.component.html',
  directives: [
    ROUTER_DIRECTIVES
  ],
  providers : [
    AuthService,
    ProfileService,
    UserService
  ]
})

export class AppComponent {
  viewContainerRef = null;

  public constructor(viewContainerRef:ViewContainerRef) {
    // We need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
  }
}
