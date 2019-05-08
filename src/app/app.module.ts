import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCompComponent } from './product-comp/product-comp.component';
import { CarritoCompComponent } from './carrito-comp/carrito-comp.component';
import { ProductsProviderService } from './products-provider.service';
import { RouterModule } from '@angular/router';
import { HomecompComponent } from './homecomp/homecomp.component';
import { FormsModule } from '@angular/forms';
import { MessagepasserService } from './messagepasser.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductCompComponent,
    CarritoCompComponent,
    HomecompComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    

    RouterModule.forRoot([
      {path: '', component: HomecompComponent},
      {path: 'carritodecompras', component: CarritoCompComponent},
      {path: '**', component: ProductCompComponent},
    ])
  ],
  providers: [
    ProductsProviderService,
    MessagepasserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
