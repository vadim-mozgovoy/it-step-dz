import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {NewProduct} from "../models";



@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

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
export class AdminPageDialogComponent  {
  newProduct : NewProduct[];
  addProduct(): void {
    this.newProduct.concat()
  }

}
