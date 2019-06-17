import { Component, OnInit } from '@angular/core';
import { ProductlistService } from '../services/productlist.service';
import { product } from '../products';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  products: product[];

  constructor(private productService: ProductlistService) { }

  ngOnInit() {
    this.getproductlist();
  }
  getproductlist(): void {
    this.productService.establishSubject.subscribe((p:product[]) => this.products = p)
    this.productService.getproductlist();
  }

  
}
