import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from '../services/productservice.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tourdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tourdetails.component.html',
  styleUrl: './tourdetails.component.css'
})
export class TourdetailsComponent implements OnInit{
  constructor(private activatedRoute: ActivatedRoute,private tourService:ProductserviceService){}
  tour:any;
  ngOnInit() {

    
    const tourId = this.activatedRoute.snapshot.params['id'];
    // Use the productId to perform any necessary actions
    console.log(tourId)
 
    this.loadTourDetails(tourId);

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

