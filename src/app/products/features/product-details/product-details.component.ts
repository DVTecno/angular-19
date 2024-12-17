// import { Component, inject } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

import { Component, effect, inject, input } from "@angular/core";
import { ProductsDetailStateService } from "../data-access/product-detail-state.service";
import { CurrencyPipe } from "@angular/common";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-details.component.html',
  providers: [ProductsDetailStateService]
})
export default class ProductDetailsComponent {
  // private activatedRoute = inject(ActivatedRoute);

  // constructor() {
  //   this.activatedRoute.params.subscribe((params) => {
  //     console.log(params);
  //   })
  // }

  productDetailState = inject(ProductsDetailStateService).state;

  id = input.required<string>();

  constructor() {
    effect(() => {
      console.log(this.id())
      this.productDetailState.getById(this.id())
    })
  }
}
