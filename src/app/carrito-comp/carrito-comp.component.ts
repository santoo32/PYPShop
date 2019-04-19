import { Component, OnInit, Input } from '@angular/core';
import { ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';


@Component({
  selector: 'app-carrito-comp',
  templateUrl: './carrito-comp.component.html',
  styleUrls: ['./carrito-comp.component.css']
})
export class CarritoCompComponent implements OnInit, AfterViewInit{
  
  
  listadeproductos = [];
  appParentMessage = 'This message is from parent';

  ngAfterViewInit(): void {
    this.appParentMessage = this.child.appChildMessage;
  }

  constructor() { }

  ngOnInit() {
  }
}
