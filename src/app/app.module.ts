import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { LandingModule} from './landing/landing.module';
import { RouterModule, Routes} from '@angular/router';
import { routes} from './app.routes';
import { AuthenticationModule } from './authentication/authentication.module'

import { CustomMaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './core/home/home.component';
import { ViewProductComponent } from './view-product/view-product.component'
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component'
import { FilterComponent } from './filter/filter.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FilterComponent,
    ViewProductComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule,
    LandingModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AuthenticationModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
