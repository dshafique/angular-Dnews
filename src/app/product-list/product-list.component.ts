import { Component } from '@angular/core';

import { Phones } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = Phones;

  share() {
    window.alert('you shared your product, nice!');
  }

  onNotify(){
    window.alert('I will let you know when this goes on sale');
  }
  /*price() {
    window.alert{{Phones.price}};
  }*/
  
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/