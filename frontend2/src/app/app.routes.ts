import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { TourdetailsComponent } from './tourdetails/tourdetails.component';
export const routes: Routes = [ {path: "Product2", component: ProductComponent},{path: "details/:id", component: TourdetailsComponent}];
