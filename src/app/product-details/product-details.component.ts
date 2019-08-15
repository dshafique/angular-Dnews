import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Phones } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  phone;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart(Phones){
  window.alert('your prodcut was added to the cart!');
  this.cartService.addToCart(Phones);
}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.phone = Phones[+params.get('productId')];
  });
  }

}