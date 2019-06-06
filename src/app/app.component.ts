import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  loading = false;

  ngOnInit() {
    this.initializeForm();
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      this.simulateSave();
    }
  }

  addProduct() {
    this.products.push(new FormControl('', [Validators.required]));
  }

  removeProduct(index: number) {
    this.products.removeAt(index);
  }

  get products(): FormArray {
    return this.form.get('products') as FormArray;
  }

  private initializeForm() {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      products: new FormArray([])
    })
  }

  private simulateSave() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.initializeForm();
    }, 1000);
  }
}
