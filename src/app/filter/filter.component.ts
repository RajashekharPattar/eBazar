import { Component, OnInit } from '@angular/core';
import { product } from '../products';
import { productlist } from '../mock-products';
import { ProductlistService } from '../services/productlist.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  constructor(private productService: ProductlistService) { }

  ngOnInit() {
    this.changes();

  }


  CategoryGroup = new FormGroup({
    categorySearch: new FormControl(''),
    minValue: new FormControl(100),
    maxValue: new FormControl(10000),
    checkbox1: new FormControl(false),
    checkbox2: new FormControl(false),
    checkbox3: new FormControl(false),
    checkbox4: new FormControl(false)
  });

  changes(): void {
    this.CategoryGroup.valueChanges.subscribe(cat => {
      //console.log('values sent from component' + cat);
      
      this.productService.categoryChanges(cat);
    });
  }
}
