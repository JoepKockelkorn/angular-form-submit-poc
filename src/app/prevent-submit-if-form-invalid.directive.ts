import { Directive, Self, Optional, Host, OnDestroy, AfterViewInit, HostListener } from '@angular/core';
import { NgControl, NgForm, ControlContainer, AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[preventSubmitIfFormInvalid]'
})
export class PreventSubmitIfFormInvalidDirective implements AfterViewInit {
  constructor(@Optional() @Host() private parent: ControlContainer) {}

  ngAfterViewInit() {
    if (!this.parent.formDirective) {
      throw new Error('No FormGroup found!');
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    if (this.parent.invalid) {
      this.markAllAsTouched(this.parent.control);
      event.preventDefault();
    }
  }

  private markAllAsTouched(control: AbstractControl) {
    // PRE ANGULAR 8::

    // if (control instanceof FormControl) {
    //   control.markAsTouched();
    // } else if (control instanceof FormGroup) {
    //   if (control.controls) {
    //     const keys = Object.keys(control.controls);
    //     for (let i = 0; i < keys.length; i++) {
    //       const formControl = control.controls[keys[i]];
    //       this.markAbstractControlTouched(formControl);
    //     }
    //   }
    // } else if (control instanceof FormArray) {
    //   control.controls.forEach(c => this.markAbstractControlTouched(c));
    // }

    control.markAllAsTouched();
  }
}