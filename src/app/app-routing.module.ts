import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductContentComponent } from './product-content/product-content.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
   component: ProductContentComponent
},
  {
    path: 'register',
    component: RegisterComponent
},
{
     path: 'login',
    component: LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
