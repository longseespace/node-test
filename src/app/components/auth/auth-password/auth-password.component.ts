import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_DIRECTIVES }    from '@angular/router';

import { AuthService } from '../';

@Component({
  moduleId : module.id,
  selector : '.l-auth--forgot-password',
  templateUrl: './auth-password.component.html',
  directives : [
    ROUTER_DIRECTIVES
  ]
})

export class AuthPasswordComponent {
  private email : string;
  private message: string;

  constructor(
    private router: Router,
    private authService: AuthService)
  { }

  continue() {
    this.authService.forgotPassword(this.email)
    .then(succeed => {
      if (succeed) {
        alert('Email sent. Please check your inbox.');
        this.router.navigate([ 'welcome/auth/login' ]);
      } else {
        this.message = 'Email not found';
      }
    })
  }
}
