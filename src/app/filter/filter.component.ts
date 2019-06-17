import { Component, OnInit } from '@angular/core';

export interface Cloth {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  
  clothes: Cloth[] = [
    {value: 'Kids-0', viewValue: 'Kids'},
    {value: 'Mens-1', viewValue: 'Mens'},
    {value: 'Women-2', viewValue: 'Women'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
