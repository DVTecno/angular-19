import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ProductItemCart } from "../interfaces/product.interface";

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  loadProducts(): Observable<ProductItemCart[]> {
    const rawProducts = localStorage.getItem('product');
    return of(rawProducts ? JSON.parse(rawProducts) : []);
  }

  saveProducts(product: ProductItemCart[]) : void {
    localStorage.setItem('product', JSON.stringify(product));
  }
}
