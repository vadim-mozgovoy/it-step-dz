import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  rForm: FormGroup;

  constructor(public dialog: MatDialog, private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(AdminPageDialogComponent);
  }
}


@Component({
  selector: 'app-admin-page-dialog',
  templateUrl: './admin-page-dialog.component.html',
  styleUrls: ['./admin-page-dialog.component.scss']
})
export class AdminPageDialogComponent implements OnInit {

  rForm: FormGroup;

  constructor(public dialog: MatDialog, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.rForm = this.fb.group({
      name: [null, [Validators.required]],
      img: [null, [Validators.required]],
      description: [null, [Validators.required]],
      quantity: [null, [Validators.required, Validators.pattern(/[0-9]/)]],
      price: [null, [Validators.required, Validators.pattern(/[0-9]/)]],
    });
  }

  onSubmit() {
    const controls = this.rForm.controls;

    if (this.rForm.invalid) {
      /** Если форма не валидна, то помечаем все контролы как touched*/
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      return;
    }

    /** TODO: Обработка данных формы */
    console.log(this.rForm.value);

  }
}
