import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { TourdetailsComponent } from './tourdetails/tourdetails.component';
import { SignupComponent } from './signup/signup.component';
export const routes: Routes = [ {path: "signup", component: SignupComponent},{path: "Product2", component: ProductComponent},{path: "details/:id", component: TourdetailsComponent}];
