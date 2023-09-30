import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tourdetails',
  standalone: true,
  imports: [],
  templateUrl: './tourdetails.component.html',
  styleUrl: './tourdetails.component.css'
})
export class TourdetailsComponent implements OnInit{
  constructor(private activatedRoute: ActivatedRoute){}
  ngOnInit() {
    const productId = this.activatedRoute.snapshot.params['id'];
    // Use the productId to perform any necessary actions
    console.log(productId)
  }
 
}

