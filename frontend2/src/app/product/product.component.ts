import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductserviceService } from '../services/productservice.service';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  tours: any[] = [];
  newProduct: any = { name: 'abc', price: 10 };

  constructor(private service: ProductserviceService,private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.service.getProducts().subscribe((products: any[]) => {
    this.products =products;
    this.tours = products;
     
    });
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
    this.service.getProducts().subscribe((products: any[]) => {
      this.products = products;});
      console.log(this.products)
    if (!this.newProduct.name || !this.newProduct.price) {
      return;
    }

    this.service.addProduct(this.newProduct)
      .subscribe(() => {
       
        this.newProduct = {
          name: '',
          price: 0
        };
      });
  }

}
