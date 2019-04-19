import { Injectable } from '@angular/core';
import { ProductCompComponent } from './product-comp/product-comp.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsProviderService {

  prod = ['p1', 'p2'];

  getProductos() {
    return this.prod;
  }


}
