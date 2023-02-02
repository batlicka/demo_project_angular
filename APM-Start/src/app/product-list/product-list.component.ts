import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from "./product";
import { filter, Subscription } from "rxjs";
import { ProductService } from "./product.service";

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  private _listFilter: string = '';
  errorMessage: string = "";
  sub!: Subscription;

  get listFilter() : string {
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducst = this.performFilter(value);
    console.log(this.products);
  }
  filteredProducst: IProduct[] =  [];

  constructor(private productService: ProductService) {  }

  products: IProduct[] = [];


  performFilter(filterBy: string) : IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  };


  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    //this._listFilter = 'cart';
    this.productService.getProducts().subscribe({
      next: product => {
        this.products = product;
        this.filteredProducst = this.products;
        this.filteredProducst = this.products;
      },
      error: err => this.errorMessage = err
    });
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product list' + message;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
