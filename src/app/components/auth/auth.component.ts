import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, ROUTER_DIRECTIVES } from '@angular/router';
import { MODAL_DIRECTIVES, BS_VIEW_PROVIDERS } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId : module.id,
  selector : '.l-auth',
  templateUrl: './auth.component.html',
  directives : [
    MODAL_DIRECTIVES,
    ROUTER_DIRECTIVES
  ],
  viewProviders : [ BS_VIEW_PROVIDERS ]
})

export class AuthComponent implements OnInit {
  @ViewChild('authModal') modal;

  constructor(
    private router : Router,
    private route: ActivatedRoute)
  { }

  ngOnInit() {
    this.modal.config = {
      backdrop : false,
      keyboard : true,
      focus : true,
      show : true
    }

    // Show the modal
    this.modal.show();
  }

  /**
   * Redirect to parent route when the modal is closed
   * @param [event] - Bootstrap Event
   */
  onHidden(event) {
    var parent = this.router.routerState.parent(this.route).url['value'][0].path;

    this.router.navigate([ parent ]);
  }
}
