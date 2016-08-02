import { Component } from '@angular/core';
import { ActivatedRoute, Router, ROUTER_DIRECTIVES } from '@angular/router';

import { CzInputText } from '../../../shared';
import { AuthService } from '../';

@Component({
  moduleId : module.id,
  selector : '.l-auth--register',
  templateUrl: './auth-register.component.html',
  directives : [
    ROUTER_DIRECTIVES,
    CzInputText
  ]
})

export class AuthRegisterComponent{
  public email : string;
  public password : string;
  private message : string;

  constructor(
    private router : Router,
    private authService : AuthService)
  { }

  ngOnInit() {
    const token = window.location.search.replace('?token=', '');
    if (token.length > 0) {
      this.authService.login('linkedin', token, null)
      .then(succeed => {
        if (succeed)
          this.router.navigate([ 'welcome/auth/profile' ], { queryParams: {}});
      })
    }
  }

  /**
   * Handles the user authentication then redirects to next page if succeed
   * @param {string} provider - Optional provider parameter
   */
  authenticate(provider) {
    this.authService.register(provider, this.email, this.password)
    .then(succeed => {
      if (succeed) {
        this.router.navigate([ 'welcome/auth/profile' ]);
      } else {
        this.message = 'Email exists';
      }
    })
  }
}
