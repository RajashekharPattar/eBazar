import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';

import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatProgressSpinnerModule
} from '@angular/material';
@NgModule({
  imports: [
  CommonModule, 
  MatToolbarModule,
  MatButtonModule, 
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatRadioModule,
  MatMenuModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatSliderModule,
  MatDividerModule,
  MatProgressSpinnerModule
  ],
  exports: [
  CommonModule,
   MatToolbarModule, 
   MatRadioModule,
   MatButtonModule, 
   MatCardModule, 
   MatInputModule, 
   MatDialogModule, 
   MatDatepickerModule,
   MatTableModule, 
   MatMenuModule,
   MatSliderModule,
   MatSelectModule,
   MatAutocompleteModule,
   MatDividerModule,
   MatProgressSpinnerModule
   ],
})
export class CustomMaterialModule { }