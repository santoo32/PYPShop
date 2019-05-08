import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagepasserService {

  public productosalcarro = [];

  anadiralcarro(producto) {
    if(this.productosalcarro.includes(producto)){
      alert('El producto ' + producto.name + ' ya esta en el carrito');
    }else{
      this.productosalcarro.push(producto);
    }
  }

  retirardelcarro(producto) {
    this.productosalcarro.splice(this.productosalcarro.indexOf(producto), 1);
  }

  getProductosCarro(){
    return this.productosalcarro;
  }

  constructor() { }
}
