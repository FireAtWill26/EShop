import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [AddProductComponent],
  imports: [
    ReactiveFormsModule,
    ProductRoutingModule,
    CommonModule
  ]
})
export class ProductModule { 
}
