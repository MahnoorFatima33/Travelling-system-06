import { Component } from '@angular/core';
import { ProductserviceService } from '../services/productservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
   
   
    constructor(private tourService:ProductserviceService){}
    user: any = {
      username: '',
      password: '',
    
    };
    
    SignUp() {
  console.log(this.user)
      // Assuming TourService has a method named addTour to post the tour data
      this.tourService.login(this.user.username,this.user.password).subscribe(
        (response) => {
          // Handle successful response
          console.log('Login Successfully:', response);
          // Reset the form
          this.resetForm();
        },
        (error) => {
          // Handle error
          console.error('Invalid:', error);
        }
      );
      this.resetForm();
    }
  
      resetForm() {
        // Reset tour object to clear the form fields
        this.user = {
          username: '',
          password: '',
        };
      }
  
  
    isPasswordVisible: boolean = false;
  
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    }
}
