import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product : Product ;

  count: number;

  constructor(
    private productService : ProductsService,
    private cartService : CartService ,
    private router : Router
    )
   { }

  ngOnInit() {
    this.cartService.bsToObs.subscribe(
      (newCounter) => {
        this.count = newCounter;
      }
    )
  }

  getDetails(val){
    console.log(val);
    this.productService.productData(val);
    this.router.navigate(['/item-details'])
  }

  addToCart(val){
    // this.cartService.count++;
    if(!this.cartService.cartItems.some((elem) => elem.name === val.name)){
      this.cartService.addToCart(val);
      this.cartService.cartCouter(++this.count);
    }
  }

}
