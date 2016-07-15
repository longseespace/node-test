import { Component, OnInit, ViewChild } from '@angular/core';
import { ROUTER_DIRECTIVES }    from '@angular/router';

@Component({
  moduleId : module.id,
  selector : '.l-welcome',
  templateUrl: './welcome.component.html',
  directives : [
    ROUTER_DIRECTIVES
  ]
})

export class WelcomeComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {

  }
}
