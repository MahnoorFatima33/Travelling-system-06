import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductserviceService } from '../services/productservice.service';
@Component({
  selector: 'app-tourform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tourform.component.html',
  styleUrl: './tourform.component.css'
})
export class TourformComponent {
  constructor(private tourService:ProductserviceService){}
  tour: any = {
    name: '',
    description: '',
    category: '',
    duration: 0,
    price: 0,
    maxLimit: 0,
    costPrice: 0,
    stops: '',
    imageUrls: ''
  };
  
  onSubmit() {

    // Assuming TourService has a method named addTour to post the tour data
    this.tourService.addTour(this.tour).subscribe(
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
    );}
    resetForm() {
      // Reset tour object to clear the form fields
      this.tour = {
        name: '',
        description: '',
        category: '',
        duration: 0,
        price: 0,
        maxLimit: 0,
        costPrice: 0,
        stops: '',
        imageUrls: ''
      };
    }
}



