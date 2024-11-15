import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

  product : FormGroup;

  constructor() {
    this.product = new FormGroup({
      name : new FormControl('', [Validators.required]),
      description : new FormControl('', [Validators.required]),
      category : new FormControl('', [Validators.required]),
      subcategory : new FormControl('', [Validators.required]),
      price : new FormControl('', [Validators.required]),
      image : new FormControl('', [Validators.required]),
      sku : new FormControl('', [Validators.required]),
      status : new FormControl('', [Validators.required])
    })
  }

  addproduct(productForm: FormGroup) {
    
  }
}
