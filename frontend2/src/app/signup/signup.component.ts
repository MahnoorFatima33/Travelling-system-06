import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  password1: string='';
  password2: string='';
  email: string='';
  phone:number=0;
  SignUp() {
    let p1 = document.getElementById('pasword1');
    let p2 = document.getElementById('pasword2');
    let emailInput= document.getElementById('email');
    const phone = document.getElementById('p');
    console.log(this.phone);
    console.log(this.email);
    console.log(this.password1);
    console.log(this.password2);
   
    // if(!this.Service.isUserExist(String(emailInput)))
    // {
    //   this.Service.saveUser;
    // }
   
  }


  isPasswordVisible: boolean = false;

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
