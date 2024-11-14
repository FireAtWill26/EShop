import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdmintestComponent } from './admintest/admintest.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    AdmintestComponent],
  imports: [
    CommonModule,
    AdminRoutingModule, 
    NgIf, 
    FormsModule
  ]
})
export class AdminModule { }
