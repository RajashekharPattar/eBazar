import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { CustomMaterialModule } from '../material.module';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    RegistrationComponent,
    LoginComponent
  ]
})
export class AuthenticationModule { }
