import { Component, input } from '@angular/core';
import { Product } from '../../../shared/interfaces/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent {
  product = input.required<Product>();
  get fullStars() {
    return Math.floor(this.product().rating.rate);
  }
}
