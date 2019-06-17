import { Injectable } from '@angular/core';
import { Observable, of, Subject,  } from 'rxjs';
import { productlist } from '../mock-productlist';
import { product } from '../products';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {
 

  constructor() { }

  establishSubject = new Subject<product[]>();
  //filterData: product[];

  getproductlist() {

    this.establishSubject.next(productlist);
  }

  SearchedProductList(SearchValue) {
    let filteredData=[];
    filteredData = productlist.filter( data => data.name === SearchValue)
    this.establishSubject.next(filteredData);
    
  }
 
}
