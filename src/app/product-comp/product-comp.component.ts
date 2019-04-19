import { Component, OnInit } from '@angular/core';
import { ProductsProviderService } from '../products-provider.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-product-comp',
  templateUrl: './product-comp.component.html',
  styleUrls: ['./product-comp.component.css']
})
export class ProductCompComponent implements OnInit {

  name: string;
  precio: number;
  listaproductos;
  @Input() appChildMessage: string;


  constructor(service: ProductsProviderService) {
    this.listaproductos = service.getProductos();
  }

  anadiralcarro($event) {
    console.log('boton apretado');
  }


  ngOnInit() {
  }

}
