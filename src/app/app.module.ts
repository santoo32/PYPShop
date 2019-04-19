import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCompComponent } from './product-comp/product-comp.component';
import { CarritoCompComponent } from './carrito-comp/carrito-comp.component';
import { ProductsProviderService } from './products-provider.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ProductCompComponent,
    CarritoCompComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    RouterModule.forRoot([
      {path: '', component: ProductCompComponent},
      {path: 'carritodecompras', component: CarritoCompComponent},
      {path: '**', component: ProductCompComponent},
    ])
  ],
  providers: [
    ProductsProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
