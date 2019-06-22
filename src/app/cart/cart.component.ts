import { Component, OnInit } from '@angular/core';
import { ProductlistService } from '../services/productlist.service';
import { FormGroup, FormControl } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 // cart = [];
  totalprice = 0;
  priceCal: FormGroup;
   qtyCartMapping = new Map();

  constructor(private productService: ProductlistService,private router: Router) { }

  ngOnInit() {
    this.priceCal = new FormGroup({
      quantity: new FormControl('')
    });
    this.subscribeCart();
  }
  subscribeCart() {
    this.productService.productcartSubject.subscribe(c => this.qtyCartMapping = c);
    this.productService.getCart();
    this.totalprice = 0;
    this.totalprice = this.pricetotal();
  }
  pricetotal() {
   this.totalprice = 0;
    //console.log("inside")
    let entries = this.qtyCartMapping.entries()
    for (let entry of entries) {
      this.totalprice+=entry[0].price * entry[1]
         // console.log("total: "+this.totalprice)
    }
   // console.log(this.totalprice)
    return this.totalprice;
  }
  removeitem(value: any) {
    this.productService.removeItem(value);
   
    this.totalprice = this.pricetotal();
  }
  total( data:object, c:any) {
    let qty= c.target.value;
    this.productService.calTotal(qty, data);
    this.totalprice = this.pricetotal()
    //console.log("qty"+qty);
  }
  checkout(){
    let order = this.productService.getCart();
   this.productService.checkout(order);
   this.router.navigate(['/home']);
    alert('Your Order Placed Successfully... Thanks For Shopping With Us')
  }
}


    // let qty = c.target.value;
    // let itemTotal = ((qty * data.price));
    // this.totalprice += itemTotal;
   
