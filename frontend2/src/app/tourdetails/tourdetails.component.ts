import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from '../services/productservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-tourdetails',
  standalone: true,
  imports: [CommonModule,FormsModule,MatIconModule,MatTabsModule],
  templateUrl: './tourdetails.component.html',
  styleUrl: './tourdetails.component.css'
})
export class TourdetailsComponent implements OnInit{
  constructor(private activatedRoute: ActivatedRoute,private tourService:ProductserviceService){}
  tour:any;
  numberOfPersons:any;
  ngOnInit() {

    
    const tourId = this.activatedRoute.snapshot.params['id'];
    // Use the productId to perform any necessary actions
    console.log(tourId)
 
    this.loadTourDetails(tourId);

  }
  currentImageIndex = 0; // Add this property to keep track of the current image index

  // Other methods...

  navigateImages(direction: 'previous' | 'next'): void {
    if (direction === 'previous') {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.tour.images.length) % this.tour.images.length;
    } else {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.tour.images.length;
    }
  }

  openImage(index: number): void {
    // Add logic to handle opening the image (if needed)
  }


  loadTourDetails(tourId: string): void {
    // Replace this with the actual method to get tour details from your service
    this.tourService.getTourById(tourId).subscribe(
      (tour: any) => {
        this.tour = tour;
      },
      error => {
        console.error('Error loading tour details:', error);
      }
    );
  }

  addToCart(): void {
    // Implement your logic to add the current tour to the cart
    console.log('Tour added to cart:', this.tour);
  }


 

  

 



 
}

