import { Component, Directive, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
@Directive({ selector: 'cart-directive' })
export class CartComponent implements OnInit {

  public msg = "cart msg"

  public name = "cart name"

  constructor() { }

  ngOnInit() {
  }

  run() {
    alert("cart method")
  }
}
