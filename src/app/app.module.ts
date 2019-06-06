import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PreventSubmitIfFormInvalidDirective } from './prevent-submit-if-form-invalid.directive';
import { FormValidatorDirective } from './form-validator.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, PreventSubmitIfFormInvalidDirective, FormValidatorDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
