import { Component } from '@angular/core';
import { ActivatedRoute, Router, ROUTER_DIRECTIVES } from '@angular/router';

import { CzInputText } from '../../../shared';
import { AuthService } from '../';

@Component({
  moduleId : module.id,
  selector : '.l-auth--login',
  templateUrl: './auth-login.component.html',
  directives : [
    ROUTER_DIRECTIVES,
    CzInputText
  ]
})

export class AuthLoginComponent{
  public email : string;
  public password : string;
  private error: string;

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
          this.router.navigate([ 'home' ], { queryParams: {}});
      })
    }
  }

  /**
   * Handles the user authentication then redirects to home if succeed
   * @param {string} provider - Optional provider parameter
   */
  authenticate(provider) {
    this.authService.login(provider, this.email, this.password)
    .then(succeed => {
      if (succeed) {
        this.router.navigate([ 'home' ]);
      } else {
        this.error = 'Invalid Username/Password';
      }
    })
  }
}
