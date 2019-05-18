import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { Routes , RouterModule } from '@angular/router' ;
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductComponent } from './home/product/product.component';
import { UserDataService } from './user/user-data.service';
import { ProductDetailsComponent } from './home/product-details/product-details.component';
import { CartService } from './home/cart.service';
import { CartComponent } from './home/cart/cart.component';

const routes : Routes = [
  { path : '' , component : HeaderComponent},
  { path : 'sign-up' , component : SignUpComponent},
  { path : 'profile' , component : UserComponent},
  { path : 'home' , component : HomeComponent},
  { path : 'item-details' , component : ProductDetailsComponent},
  { path : 'cart' , component : CartComponent},
  { path : '**' , redirectTo:'',component : HeaderComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    HeaderComponent,
    NavbarComponent,
    ProductComponent,
    ProductDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserDataService , CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
