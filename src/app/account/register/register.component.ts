import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  user : FormGroup;
  constructor() { 
    this.user = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      phoneNumber : new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      dateOfBirth : new FormControl('', [Validators.required])
    })
  }

  register(userForm: FormGroup) {
    console.log(userForm.value);
  }
}
