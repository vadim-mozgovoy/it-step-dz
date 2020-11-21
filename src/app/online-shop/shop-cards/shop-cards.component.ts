import { Component, OnInit } from '@angular/core';
import {Product} from "../order/order.component";


@Component({
  selector: 'app-shop-cards',
  templateUrl: './shop-cards.component.html',
  styleUrls: ['./shop-cards.component.scss']
})
export class ShopCardsComponent implements OnInit {

  products: Product[] = [
    {position: 1, name: 'Dog', img: 'src=https://material.angular.io/assets/img/examples/shiba2.jpg',quantity: 1, price: 150, subtotal: 150, remove: '&nbsp;' },
    {position: 2, name: 'Dog1', img: 'src=https://material.angular.io/assets/img/examples/shiba2.jpg',quantity: 2, price: 150, subtotal: 150, remove: '&nbsp;' },
    {position: 2, name: 'Dog1', img: 'src=https://material.angular.io/assets/img/examples/shiba2.jpg',quantity: 2, price: 150, subtotal: 150, remove: '&nbsp;' },
    {position: 2, name: 'Dog1', img: 'src=https://material.angular.io/assets/img/examples/shiba2.jpg',quantity: 2, price: 150, subtotal: 150, remove: '&nbsp;' },
    {position: 2, name: 'Dog1', img: 'src=https://material.angular.io/assets/img/examples/shiba2.jpg',quantity: 2, price: 150, subtotal: 150, remove: '&nbsp;' },
    {position: 2, name: 'Dog1', img: 'src=https://material.angular.io/assets/img/examples/shiba2.jpg',quantity: 2, price: 150, subtotal: 150, remove: '&nbsp;' },
    {position: 2, name: 'Dog1', img: 'src=https://material.angular.io/assets/img/examples/shiba2.jpg',quantity: 2, price: 150, subtotal: 150, remove: '&nbsp;' },
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
