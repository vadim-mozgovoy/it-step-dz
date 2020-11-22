import {Injectable} from '@angular/core';
import {Product} from "./models";


@Injectable({
  providedIn: 'root'
})

export class OnlineShopService {

  private products: Product[] = [
    {
      position: 1,
      name: 'Пальто',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8tfZAEfMOdhKm-42O0ETwDO2UWrjqmvBOA&usqp=CAU',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain.`,
      quantity: 1,
      price: 150,
      subtotal: 150,
      remove: '&nbsp;'
    },
    {
      position: 2,
      name: 'Пальто',
      img: 'https://vsegdavmode.com/zimnee-palto-08765-seryj-0-min.jpg',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain.`,
      quantity: 1,
      price: 170,
      subtotal: 170,
      remove: '&nbsp;'
    },
    {
      position: 3,
      name: 'Куртка',
      img: 'https://dolcedonna.com.ua/uploaded/media/large_kr-190051_1-min.jpg',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain.`,
      quantity: 1,
      price: 130,
      subtotal: 130,
      remove: '&nbsp;'
    },
    {
      position: 4,
      name: 'Пальто',
      img: 'https://modnapanenka.com.ua/image/data/Favoritti/990/120.jpeg',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain.`,
      quantity: 1,
      price: 160,
      subtotal: 160,
      remove: '&nbsp;'
    },
    {
      position: 5,
      name: 'Пальто',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQuRluY3Vb_3GLxyTf-JNjwS42gKHuevFS7A&usqp=CAU',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain.`,
      quantity: 1,
      price: 140,
      subtotal: 140,
      remove: '&nbsp;'
    },
    {
      position: 6,
      name: 'Пальто',
      img: 'https://vsegdavmode.com/zimnee-palto-08856-pylnaja-roza-0-min.jpg',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain.`,
      quantity: 1,
      price: 190,
      subtotal: 190,
      remove: '&nbsp;'
    },
    {
      position: 7,
      name: 'Пальто',
      img: 'https://blankalux.com.ua/upload/catalog_images/326128_beg/326128_beg02.jpg',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain.`,
      quantity: 1,
      price: 200,
      subtotal: 200,
      remove: '&nbsp;'
    },
    {
      position: 8,
      name: 'Пальто',
      img: 'https://modnapanenka.com.ua/image/data/Favoritti/%D0%9F-1089/1089-2/7.jpeg',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain.`,
      quantity: 1,
      price: 120,
      subtotal: 120,
      remove: '&nbsp;'
    },
  ];


  constructor() {
  }

  getProducts(): Product[] {
    return this.products;
  }
}
