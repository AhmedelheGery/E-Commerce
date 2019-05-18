import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  // @Input() product : Product ;
  productInfo;


  constructor(
    private productService : ProductsService,
    private cartService : CartService,
    ) {
    this.productInfo = this.productService.updateProductData();
    console.log(this.productInfo);
   }

  ngOnInit() {
  }


}
