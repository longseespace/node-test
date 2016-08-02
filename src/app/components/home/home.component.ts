import { Component, OnChanges } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { TYPEAHEAD_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

import { UserService, AuthService, ProfileService } from '../';

@Component({
  moduleId : module.id,
  selector : '.l-home',
  templateUrl: './home.component.html',
  directives: [
    ROUTER_DIRECTIVES,
    TYPEAHEAD_DIRECTIVES
  ]
})

export class HomeComponent {
  public user : any = {
    email : '',
    password : '',
    profile : {
      firstName : '',
      lastName : '',
      company : '',
      categories : [],
      address1 : '',
      address2 : '',
      phone : ''
    }
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private profileService: ProfileService)
  { }

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate([ 'welcome' ]);
    } else {
      this.profileService.get(this.authService.getToken())
        .then(user => {
          console.log(user);
          this.user = user;
        });
    }
  }

  edit() {
    this.router.navigate([ 'profile/edit' ]);
  }

  logout() {
    this.authService.logout();
    this.router.navigate([ 'welcome' ]);
  }
}
