import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  standalone: false,
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent {
  category: FormGroup;
  constructor() {
    this.category = new FormGroup({
      name: new FormControl('', [Validators.required]),
      parentCategory : new FormControl('')
    })
  }

  adddCategory(categoryForm: FormGroup) {
    console.log(categoryForm.value);
  }
}
