import { Component, OnInit } from '@angular/core';
import {Product} from "../../models";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  formGroup: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    const controls = this.formGroup.controls;

    if (this.formGroup.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      return;
    }

  }
}
