import { Injectable } from '@angular/core';
import { Product } from './models';

@Injectable({
  providedIn: 'root'
})
export class BasketShopService {

  get shopProducts(): Product[] {
    const shopProducts: string = localStorage.getItem('basket');
    const records: Product[] = JSON.parse(shopProducts);
    return records || [];
  }

  set shopProducts(value: Product[]) {
    const records: string = JSON.stringify(value);
    localStorage.setItem('basket', records);
  }


  constructor() {
  }

  getProducts(): Product[] {
    return this.shopProducts;
  }

  addProducts(product: Product, count: number): void {
    const products = new Array(count).fill(product);
    this.shopProducts = this.shopProducts.concat(products);
  }

  getTotalCost(): number {
    return this.shopProducts.map(t => t.subtotal).reduce((acc, value) => acc + value, 0);
  }

  updateProductCount(product: Product, count: number): void {
    const productsExceptCurrentProduct = this.shopProducts.filter(item => item.name !== product.name);
    const newProducts = new Array(count).fill(product);
    this.shopProducts = productsExceptCurrentProduct.concat(newProducts);
  }

  deleteProduct(product: Product): void {
    const index = this.shopProducts.findIndex(item => item.name === product.name);
    this.shopProducts = this.shopProducts.filter((item: Product, i: number) => i !== index);
  }
}
