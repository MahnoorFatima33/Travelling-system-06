import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductserviceService } from '../services/productservice.service';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ElementRef } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog'
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,MatButtonModule,MatCardModule,MatDialogModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  reviews: any[] = [
    {
      name: 'John Doe',
      date: '2023-12-09',
      reviewDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      name: 'Jane Doe',
      date: '2023-12-08',
      reviewDescription: 'Sed a ligula euismod, rutrum quam sed, laoreet ipsum...',
    },
    {
      name: 'Mike Smith',
      date: '2023-12-07',
      reviewDescription: 'Donec vitae nibh finibus, placerat risus vel, facilisis diam...',
    },
  ];
  products: any[] = [];
  tours: any[] = [];
  newProduct: any = { name: 'abc', price: 10 };

  constructor(private elementRef: ElementRef,private service: ProductserviceService,private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.service.getTours().subscribe((products: any[]) => {
    this.products =products;
    this.tours = products;
     
    });
  }

  scrollTo(sectionId: string): void {
    const section = this.elementRef.nativeElement.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  

  addProduct(event: Event): void {
    this.tours = [
      {
        id: 1,
        name: 'Adventure Trek in the Himalayas',
        price: 500,
        duration: '7 days',
        maxPersons: 10
      },
      {
        id: 1,
        name: 'Adventure Trek in the Himalayas',
        price: 500,
        duration: '7 days',
        maxPersons: 10
      },
      {
        id: 1,
        name: 'Adventure Trek in the Himalayas',
        price: 500,
        duration: '7 days',
        maxPersons: 10
      },
      {
        id: 1,
        name: 'Adventure Trek in the Himalayas',
        price: 500,
        duration: '7 days',
        maxPersons: 10
      },
      {
        id: 1,
        name: 'Adventure Trek in the Himalayas',
        price: 500,
        duration: '7 days',
        maxPersons: 10
      }, {
        id: 1,
        name: 'Adventure Trek in the Himalayas',
        price: 500,
        duration: '7 days',
        maxPersons: 10
      },
      // Add more tours as needed
    ];
    event.preventDefault();
    this.service.getTours().subscribe((products: any[]) => {
      this.products = products;});
      console.log(this.products)
    if (!this.newProduct.name || !this.newProduct.price) {
      return;
    }

    this.service.addTour(this.newProduct)
      .subscribe(() => {
       
        this.newProduct = {
          name: '',
          price: 0
        };
      });
  }
  toggleReview(index: number): void {
    this.reviews[index].isExpanded = !this.reviews[index].isExpanded;
  }

}
