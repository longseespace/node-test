import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/forms';

@Component({
  moduleId : module.id,
  selector : 'cz-input-text',
  templateUrl: './input-text.html',
  directives : [
    FORM_DIRECTIVES
  ]
})

export class CzInputText implements OnInit {
  @Input() name : string;
  @Input() placeholder : string;
  @Input() label : string;
  @Input() model : string;

  constructor() {

  }

  ngOnInit() {
    console.log(this.model);
  }

  onFocus() {

  }

  onBlur() {

  }
}
