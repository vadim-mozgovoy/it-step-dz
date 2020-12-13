import {Injectable} from '@angular/core';
import {Product} from './models';
import {BehaviorSubject, Observable} from 'rxjs';
import {skip, tap} from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class OnlineShopService {
  // TODO: Vadim: Subject, BehaviorSubject
  private productsSubject: BehaviorSubject<Product[]>;

  constructor(private http: HttpClient) {
    this.productsSubject = new BehaviorSubject<Product[]>(this.products);

    this.productsSubject.asObservable()
      .pipe(
        skip(1),
        tap(value => console.log('Save into LS:', value))
      )
      .subscribe((value: Product[]) => localStorage.setItem('products', JSON.stringify(value)));
  }

  private _products: Product[];

  get products(): Product[] {
    const rawProducts: string = localStorage.getItem('products');
    const records: Product[] = JSON.parse(rawProducts);
    return records || this._products;
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/products.json')
  }

  addProduct(model: Product): void {
    const allProducts: Product[] = this.productsSubject.getValue() || [];
    allProducts.push(model);
    this.productsSubject.next(allProducts);
  }

  deleteProduct(model: Product): void {
    const allProducts = this.productsSubject.getValue().filter(product => product.position !== model.position);
    this.productsSubject.next(allProducts);
  }
}
