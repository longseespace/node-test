import { Component, OnChanges } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { TYPEAHEAD_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

import { UserService } from '../';

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
    email : 'john.doe@gmail.com',
    password : '',
    profile : {
      firstName : 'John',
      lastName : 'Doe',
      company : 'Google',
      categories : ['Category 1', 'Category 2', 'Category 3'],
      address1 : 'California',
      address2 : 'Elm Street',
      phone : '+1 5599999999'
    }
  };

  constructor(private router: Router) {

  }

  edit() {
    this.router.navigate([ 'profile/edit' ]);
  }

  logout() {
    this.router.navigate([ 'welcome' ]);
  }
}
