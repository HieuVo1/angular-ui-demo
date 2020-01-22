import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router'
import { ProductComponent }   from './product/product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NotFountComponent} from './not-fount/not-fount.component';
const route =[
  {path : 'collections/product',component: ProductComponent},
  {path : 'home' ,component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'login',component: LoginComponent},
  {path: 'sign-up',component: SignUpComponent},
  {path: 'contact',component: ContactComponent},
  { path: 'collections/product/product-detail/:id', component: ProductDetailComponent },
  {path: '**' ,component:NotFountComponent},
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(route),
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
