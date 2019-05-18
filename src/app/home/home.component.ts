import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products : Product[];

  constructor( private productService : ProductsService) { }

  ngOnInit() {
    this.products = this.productService.getProducts()
  }

}
