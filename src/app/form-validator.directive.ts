import { Directive, Optional, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';

@Directive({
  selector: '[appFormValidator]'
})
export class FormValidatorDirective {
  @HostListener('submit', ['$event'])
  onSubmit(event: Event) {
    // This doesn't prevent the ngSubmit of submit event on the component itself
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
  }
}