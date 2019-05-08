import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsProviderService } from '../products-provider.service';
import { Input } from '@angular/core';
import { CarritoCompComponent } from '../carrito-comp/carrito-comp.component';
import { OutletContext } from '@angular/router';
import { producto } from './claseproducto';

@Component({
  selector: 'app-product-comp',
  templateUrl: './product-comp.component.html',
  styleUrls: ['./product-comp.component.css']
})
export class ProductCompComponent implements OnInit {

  name: string;
  precio: number;
  

  listaproductos: producto [];
  public productosalcarro = [];



  constructor(service: ProductsProviderService) {
    this.listaproductos = service.getProductos();
  }



  anadiralcarro(producto) {
    this.productosalcarro.push(producto);

  }


  ngOnInit() {
  }

}
