import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private bs = new BehaviorSubject(0);
  bsToObs = this.bs.asObservable();

  cartItems=[];
  count : number = 0;

  constructor() { }

  addToCart(data){
    this.cartItems.push(data);
  }

  updateCart(){
    return this.cartItems;
  }

  cartCouter(val){
    this.bs.next(val);
  }
}
