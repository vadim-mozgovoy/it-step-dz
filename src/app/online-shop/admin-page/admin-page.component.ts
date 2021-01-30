import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
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
 opened = false;
 log (state){
   console.log(state)
 }
  products: Product[]; // All possible products (100500)
@Input() product : Product;
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

  deleteProduct(index: number): void {
    this.service.deleteProduct(index);
  }

  updateProduct(data: Product, index: number): void {
    const dialogRef = this.dialog.open(AdminPageDialogComponent, {data});
    dialogRef.beforeClosed().subscribe((product: Product) => {
      if (product) {
        this.service.updateProduct(product, index);
      }
    });

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
              public dialogRef: MatDialogRef<AdminPageDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public product: Product) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.fb.group({
      id: [null, [Validators.required]],
      name: [null, [Validators.required]],
      img: [null, [Validators.required]],
      description: [null, [Validators.required]],
      quantity: [null, [Validators.required, Validators.pattern(/[0-9]/)]],
      price: [null, [Validators.required, Validators.pattern(/[0-9]/)]],
    });
    // TODO: check if has data
    if (this.product) {
      this.formGroup.setValue(this.product);
    }
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
