import { Injectable } from '@angular/core';
import { ProductCompComponent } from './product-comp/product-comp.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsProviderService {

  prod = ['Zapatillas - $1000', 'Remera - $300', 'Buzo - $700', 'Gorra - $200'];

  getProductos() {
    return this.prod;
  }


}
