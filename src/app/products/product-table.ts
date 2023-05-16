import { Component, OnInit } from '@angular/core';
import {Product} from "../domain/product";
import {ProductService} from "../services/productservice";

@Component({
  selector: 'table-template-demo',
  templateUrl: './product-table.html',
  styleUrls: ['./product-table.scss']
})
export class ProductTable implements OnInit {
  layout: string = 'list';
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().then((data) => (this.products = data));
  }

  getSeverity(status: string): string {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'danger';
    }
  }
}
