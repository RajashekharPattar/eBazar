import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : String;
  password : String;
 // constructor(Private router:Router) { }

  ngOnInit() {
  }
  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
    // this.router.navigate(["user"]);
    alert("Login Successful");
    }else {
      alert("Invalid credentials");
    }
  }
  }

