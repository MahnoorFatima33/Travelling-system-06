import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { TourdetailsComponent } from './tourdetails/tourdetails.component';
import { SignupComponent } from './signup/signup.component';
import { TourformComponent } from './tourform/tourform.component';
import { LoginComponent } from './login/login.component';
export const routes: Routes = [  
{path: "addtour",component:TourformComponent},{path: "login",component:LoginComponent}, {path: "signup", component: SignupComponent},{path: "Product2", component: ProductComponent},{path: "details/:id", component: TourdetailsComponent}];
