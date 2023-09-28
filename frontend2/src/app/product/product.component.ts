import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductserviceService } from '../services/productservice.service';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  newProduct: any = { name: 'abc', price: 10 };

  constructor(private service: ProductserviceService) {}
  ngOnInit(): void {
    this.service.getProducts().subscribe((products: any[]) => {
    this.products = products;

     
    });
  }
  addProduct(event: Event): void {
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
