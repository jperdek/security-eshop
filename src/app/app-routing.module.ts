import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryInfoComponent } from './delivery-info/delivery-info.component';
import { LoginComponent } from './login/login.component';
import { PayingMethodsComponent } from './paying-methods/paying-methods.component';
import { ProductContentComponent } from './product-content/product-content.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: '',
    component: ProductContentComponent
  },
  {
    path: 'signup',
    component: RegisterComponent
  },
  {
    path: 'signin',
    component: LoginComponent
  },
  {
    path: 'cart',
  component: ShoppingCartComponent
  },
  {
    path: 'delivery',
   component: DeliveryInfoComponent
  },
  {
    path: 'paying-methods',
   component: PayingMethodsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
