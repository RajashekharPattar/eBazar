import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['Bangalore', 'Mysore', 'Chamarajanagar'];
  constructor() { }

  ngOnInit() {
  }

}
