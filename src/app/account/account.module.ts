import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    ReactiveFormsModule,
    AccountRoutingModule,
    CommonModule
  ]
})
export class AccountModule {
}
