import { Component, OnInit, Input, Inject} from '@angular/core';
//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

/*export interface DialogData {
  listadeproductos: [];
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}*/

@Component({
  selector: 'app-carrito-comp',
  templateUrl: './carrito-comp.component.html',
  styleUrls: ['./carrito-comp.component.css']
})
export class CarritoCompComponent implements OnInit {


  listadeproductos = [ 'P1 '];
  @Input() public parentData;

  retirardelcarro(producto) {
    this.parentData.pop();
  }

  checkout() {
    /*const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {prod: this.listadeproductos}
    });*/
  }
  constructor() { }

  ngOnInit() {
  }
}




