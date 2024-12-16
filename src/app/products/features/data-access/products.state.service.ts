import { Product } from './../../../shared/interfaces/product.interface';
import { inject, Injectable } from "@angular/core";
import { signalSlice } from 'ngxtension/signal-slice';
import { ProductService } from "./products.service";
import { catchError, map, of, startWith, Subject, switchMap } from "rxjs";


interface State {
  products: Product[];
  status: 'loading' | 'success' | 'error';
  page: number;
}

@Injectable()
export class ProductsStateService {
  private productsService = inject(ProductService)
  private initialState: State = {
    products: [],
    status: 'loading' as const,
    page: 1,
  };

  changePage$ = new Subject<number>();

  loadProducts$ = this.changePage$.pipe(
    startWith(1),
    switchMap((page) => this.productsService.getProducts(page)),
    map((products) => ({ products, status: 'success' as const })),
    catchError(() => {
      return of({
        product: [],
        status: 'error' as const
      });
    })
  );

  state = signalSlice({
    initialState: this.initialState,
    sources: [
      this.changePage$.pipe(
        map((page) => ({ page, status: 'loading' as const})),
      ),
      this.loadProducts$
    ],
  });
}
