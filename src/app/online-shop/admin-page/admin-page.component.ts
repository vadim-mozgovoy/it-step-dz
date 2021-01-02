import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "../models";
import {OnlineShopService} from '../online-shop.service';
import {count} from "rxjs/operators";


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  products: Product[]; // All possible products (100500)

  constructor(public dialog: MatDialog,
              private fb: FormBuilder,
              private service: OnlineShopService) {
  }

  ngOnInit(): void {
    this.service.getProducts()
      .subscribe(products => this.products = products);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AdminPageDialogComponent);

    dialogRef.afterClosed().subscribe((product: Product) => {
      if (product) {
        this.service.addProduct(product);
      }
    });
  }

  deleteProduct(product: Product): void {
    this.service.deleteProduct(product);
  }

  updateProduct(product: Product, count: number): void {
    this.service.updateProduct(product, count);
  }
}


@Component({
  selector: 'app-admin-page-dialog',
  templateUrl: './admin-page-dialog.component.html',
  styleUrls: ['./admin-page-dialog.component.scss']
})
export class AdminPageDialogComponent implements OnInit {

  formGroup: FormGroup;

  constructor(public dialog: MatDialog,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<AdminPageDialogComponent>) {
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

    const product: Product = this.formGroup.value;
    this.dialogRef.close(product);
  }
}
