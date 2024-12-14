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
  // get fullStars() {
  //   return Math.floor(this.product().rating.rate);
  // }

  //  // Propiedad calculada para estrellas completas (amarillas)
  //  get fullStarsArray(): undefined[] {
  //   return Array(Math.floor(this.product().rating.rate)).fill(undefined);
  // }

  // // Propiedad calculada para estrellas vacías (grises)
  // get emptyStarsArray(): undefined[] {
  //   return Array(5 - Math.floor(this.product().rating.rate)).fill(undefined);
  // }

  get fullStarsArray(): undefined[] {
    return Array(Math.floor(this.product().rating.rate)).fill(undefined);
  }

  get hasHalfStar(): boolean {
    return this.product().rating.rate % 1 > 0;
  }

  get decimalPercentage(): number {
    return (this.product().rating.rate % 1) * 100; // Parte decimal en porcentaje
  }

  get emptyStarsArray(): undefined[] {
    const emptyStars = 5 - Math.floor(this.product().rating.rate) - (this.hasHalfStar ? 1 : 0);
    return Array(emptyStars).fill(undefined);
  }
}
