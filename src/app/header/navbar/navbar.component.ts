import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/home/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  counter : number;

  constructor(private cartService : CartService) {

   }

  ngOnInit() {
    this.cartService.bsToObs.subscribe(
      (newCounter) => {
        this.counter = newCounter;
      }
    )
  }

}
