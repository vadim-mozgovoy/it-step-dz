import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form-dialog',
  templateUrl: './contact-form-dialog.component.html',
  styleUrls: ['./contact-form-dialog.component.scss']
})
export class ContactFormDialogComponent implements OnInit {
  data: any = {};

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() { }

  ngOnInit(): void {
    this.data.animal = 'Hello';
  }

  getErrorMessage(formName: string): string {
    if (this[formName].hasError('required')) {
      return 'You must enter a value';
    }

    return this[formName].hasError('email') ? 'Not a valid email' : '';
  }
}
