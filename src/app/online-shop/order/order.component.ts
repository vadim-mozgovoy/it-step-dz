import { Component, OnInit } from '@angular/core';

export interface Product {
  name: string;
  position: number;
  img: string;
  quantity: number;
  price: number;
  subtotal: number;
  remove: string
}

const ELEMENT_DATA: Product[] = [
  {position: 1, name: 'Dog', img: 'src=https://material.angular.io/assets/img/examples/shiba2.jpg',quantity: 1, price: 150, subtotal: 150, remove: '&nbsp;' },
  {position: 2, name: 'Dog1', img: 'src=https://material.angular.io/assets/img/examples/shiba2.jpg',quantity: 2, price: 150, subtotal: 150, remove: '&nbsp;' }
];


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})



//




export class OrderComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'img', 'quantity', 'price', 'subtotal', 'remove'];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit(): void {




  }

}

