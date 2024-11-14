import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  admin: any ={
    uname: '',
    password: '',
    correctPassword: 'correctPassword'
  }

  saveForm(f: NgForm){
    this.admin.uname = f.value["uname"];
    this.admin.password = f.value["password"];
    if(this.admin.password != this.admin.correctPassword){
      console.log("Wrong Password");
    }
    else{      
      console.log(this.admin.uname, this.admin.password);
    }
  }
}
