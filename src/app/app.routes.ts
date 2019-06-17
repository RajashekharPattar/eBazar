import { LandingComponent } from './landing/landing/landing.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { ItemComponent } from './landing/item/item.component';
import { ItemListComponent } from './landing/item-list/item-list.component';
export const routes: Routes = [
    {
      path: 'landing',
      pathMatch: 'full',
      component: LandingComponent
    },
    {
        path: 'login',
        pathMatch: 'full',
        component: LoginComponent
      },
     
      {
        path: 'register',
        pathMatch: 'full',
        component: RegistrationComponent
      },
      {
        path: 'item-list',
        pathMatch: 'full',
        component: ItemListComponent
      },
      {
        path: 'item',
        pathMatch: 'full',
        component: ItemComponent
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
  ];