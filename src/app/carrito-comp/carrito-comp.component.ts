import { MessagepasserService } from './../messagepasser.service';
import { Component, OnInit, Input, Inject} from '@angular/core';
import { ProductCompComponent } from '../product-comp/product-comp.component';
import { producto } from '../product-comp/claseproducto';

@Component({
  selector: 'app-carrito-comp',
  templateUrl: './carrito-comp.component.html',
  styleUrls: ['./carrito-comp.component.css']
})
export class CarritoCompComponent implements OnInit {

  total: number = 0;
  parentData: producto [];


  retirardelcarro(producto) {
    this.parentData.splice(this.parentData.indexOf(producto), 1);
  }

  checkout() {
    alert('Confirmada su compra de ' + this.parentData.length + ' elementos');
  }

  constructor(private paser: MessagepasserService) {
    this.parentData = paser.getProductosCarro();
   }

  ngOnInit(): void {
    //this.parentData.push(new producto('bufanda', 100));
  }

  gettotal(): number{
      this.total = 0;
      this.parentData.map(producto => this.total += producto.precio*producto.cantidad);
      return this.total;
      
  }



}




