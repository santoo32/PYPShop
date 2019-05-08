import { MessagepasserService } from './../messagepasser.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsProviderService } from '../products-provider.service';
import { Input } from '@angular/core';
import { CarritoCompComponent } from '../carrito-comp/carrito-comp.component';
import { OutletContext } from '@angular/router';
import { producto } from './claseproducto';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-product-comp',
  templateUrl: './product-comp.component.html',
  styleUrls: ['./product-comp.component.css']
})
export class ProductCompComponent implements OnInit {

  name: string;
  precio: number;
  

  listaproductos: producto [];



  constructor(service: ProductsProviderService, private pasador: MessagepasserService) {
    this.listaproductos = service.getProductos();
  }



  anadiralcarro(producto) {
    this.pasador.anadiralcarro(producto);
  }


  ngOnInit() {
  }

}
