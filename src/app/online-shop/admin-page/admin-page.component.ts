import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BasketShopService} from "../basket-shop.service";
import {Product} from "../models";


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  formGroup: Product[];

  constructor(public dialog: MatDialog, private fb: FormBuilder, ) {
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AdminPageDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.formGroup = result;
    });
    // dialogRef.close('Pizza!');
  }

}


@Component({
  selector: 'app-admin-page-dialog',
  templateUrl: './admin-page-dialog.component.html',
  styleUrls: ['./admin-page-dialog.component.scss']
})
export class AdminPageDialogComponent implements OnInit {

  formGroup: FormGroup;

  constructor(public dialog: MatDialog, private fb: FormBuilder, public dialogRef: MatDialogRef<AdminPageDialogComponent>) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.fb.group({
      name: [null, [Validators.required]],
      img: [null, [Validators.required]],
      description: [null, [Validators.required]],
      quantity: [null, [Validators.required, Validators.pattern(/[0-9]/)]],
      price: [null, [Validators.required, Validators.pattern(/[0-9]/)]],
    });
  }

  onSubmit() {
    const controls = this.formGroup.controls;

    if (this.formGroup.invalid) {
      /** Если форма не валидна, то помечаем все контролы как touched*/
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      return;
    }

    /** TODO: Обработка данных формы */
    console.log(this.formGroup.value);
  }

}
