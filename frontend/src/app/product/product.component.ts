import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,RouterOutlet],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
  
})
export class ProductComponent {
  products: any[] = [];
  newProduct: any = { name: '', price: 0 };

  constructor(private productService: ProductService) {}

  ngOnInit(): void { // Initialize component
    this.getProducts(); // Fetch products from backend
  }

  getProducts(): void { // Get products from backend
    this.productService.getProducts() // Use ProductService method
      .subscribe(products => this.products = products); // Update products array
  }

  addProduct(event: Event): void { // Add new product
    event.preventDefault(); // Prevent default form submission

    if (!this.newProduct.name || !this.newProduct.price) { // Validate inputs
      return;
    }

    this.productService.addProduct(this.newProduct) // Use ProductService method
      .subscribe(() => { // Handle successful creation
        this.getProducts(); // Fetch updated products
        this.newProduct = { // Reset new product object
          name: '',
          price: 0
        };
      });
  }


}
