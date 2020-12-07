import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryInfoComponent } from './delivery-info/delivery-info.component';
import { LoginComponent } from './login/login.component';
import { OrderCompletedComponent } from './order-completed/order-completed.component';
import { PayingMethodsComponent } from './paying-methods/paying-methods.component';
import { ProductContentComponent } from './product-content/product-content.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { AuthGuard } from './auth-guard'
import { ManageBoardComponent } from './manage-board/manage-board.component';

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
    component: ShoppingCartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'delivery',
    component: DeliveryInfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'paying-methods',
    component: PayingMethodsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'completed',
    component: OrderCompletedComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manage',
    component: ManageBoardComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
