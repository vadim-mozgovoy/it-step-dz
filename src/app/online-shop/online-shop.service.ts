import { Injectable } from '@angular/core';
import { Product } from './models';
import { BehaviorSubject, Observable } from 'rxjs';
import { skip, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as mock from '../../assets/products.json';


@Injectable({
  providedIn: 'root'
})
export class OnlineShopService {
  // TODO: Vadim: Subject, BehaviorSubject
  productsSubject: BehaviorSubject<Product[]>;

  constructor(private http: HttpClient) {
    this.productsSubject = new BehaviorSubject<Product[]>(this.products);
    this.productsSubject.asObservable()
      .pipe(
        skip(1),
        tap(value => console.log('Save into LS:', value))
      )
      .subscribe((value: Product[]) => localStorage.setItem('products', JSON.stringify(value)));
  }

  get products(): Product[] {
    const rawProducts: string = localStorage.getItem('products');
    const records: Product[] = JSON.parse(rawProducts);
    return  records || (mock as any).default;
  }

  getProducts(): Observable<Product[]> {
    return this.productsSubject;
  }




  addProduct(model: Product): void {
    const allProducts: Product[] = this.productsSubject.getValue() || [];
    allProducts.push(model);
    this.productsSubject.next(allProducts);
  }

  deleteProduct(i: number): void {
    const allProducts = this.productsSubject.getValue().filter((product, index) => i !== index);
    this.productsSubject.next(allProducts);
  }

  updateProduct(product: Product, i: number): void {
    const products = this.productsSubject.getValue();
    products[i] = product;
    this.productsSubject.next(products);
  }
}
