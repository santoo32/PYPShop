import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homecomp',
  templateUrl: './homecomp.component.html',
  styleUrls: ['./homecomp.component.css']
})
export class HomecompComponent implements OnInit {

private selectedProduct;

  productClicked($event) {
      this.selectedProduct = JSON.parse($event);
  }

  constructor() { }

  ngOnInit() {
  }

}
