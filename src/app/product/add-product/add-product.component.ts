import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  productName: string = '';
  productDiscription: string = '';
  productPrice: number = 0;
  productImage: string = '';
  sku: string = '';
}
