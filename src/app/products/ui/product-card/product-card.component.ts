import { Product } from './../../../shared/interfaces/product.interface';
import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent {
  product = input.required<Product>();

  addToCart = output<Product>();

  add(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.addToCart.emit(this.product());
  }

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
