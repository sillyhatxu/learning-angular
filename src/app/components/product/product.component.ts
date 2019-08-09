import { Component, OnInit, ViewChild } from '@angular/core';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @ViewChild(CartComponent, { static: false }) cart !: CartComponent;

  public productName = "product name"

  constructor() {

  }

  ngOnInit() {
  }

  getCartData() {
    alert(this.cart.msg)
    alert(this.cart.name)
  }
  updateNameFromCart() {
    this.productName = this.cart.name
  }

  executeCartMethod() {
    this.cart.run()
  }
}
