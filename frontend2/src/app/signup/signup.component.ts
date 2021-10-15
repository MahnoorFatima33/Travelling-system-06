import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductserviceService } from '../services/productservice.service';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  password1: string='';
  password2: string='';
  email: string='';
  phone:number=0;
 
  constructor(private tourService:ProductserviceService){}
  user: any = {
    username: '',
    password: '',
    phone: 0,
    address: ''
  };
  
  SignUp() {
console.log(this.user)
    // Assuming TourService has a method named addTour to post the tour data
    this.tourService.addUser(this.user).subscribe(
      (response) => {
        // Handle successful response
        console.log('Tour added:', response);
        // Reset the form
        this.resetForm();
      },
      (error) => {
        // Handle error
        console.error('Error adding tour:', error);
      }
    );
    this.resetForm();
  }

    resetForm() {
      // Reset tour object to clear the form fields
      this.user = {
        username: '',
        password: '',
        phone: '',
        address: 0
      };
    }


  isPasswordVisible: boolean = false;

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
