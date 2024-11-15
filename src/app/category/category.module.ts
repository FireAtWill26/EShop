import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryRoutingModule } from './category-routing.module';
import {  ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddCategoryComponent],
  imports: [
    CategoryRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class CategoryModule { }
