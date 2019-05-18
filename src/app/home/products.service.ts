import { Injectable, EventEmitter } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  singleProduct;

  public products : Product[] = [
    new Product (
    "Product 1" ,
     "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet , Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ,Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
     "$200",
     'assets/products/img-1.jpg'
     ),
     new Product (
    "Product 2" ,
    "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    "$110",
    "assets/products/img-2.jpg"
    ),
    new Product (
    "Product 3" ,
    "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet , Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    "$150",
    "assets/products/img-3.jpg"
    ),
     new Product (
    "Product 4" ,
    "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    "$180",
    "assets/products/img-4.jpg"
    ), 
    new Product (
    "Product 5" ,
    "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    "$300",
    "assets/products/img-5.jpg"
    ), 
    new Product (
    "Product 6" ,
    "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    "$210",
    "assets/products/img-6.jpg"
    ),                
  ]

      // GET DETALIS EVENT
      productDetails = new EventEmitter<Product>();


  constructor() { }

  getProducts(){
    return this.products.slice();
  }

    // PRODUCT DATA

    productData(data){
      this.singleProduct = data
    }
  
    updateProductData(){
      return this.singleProduct
    }
}
