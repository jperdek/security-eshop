import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegisterComponent } from './register/register.component';

import { MaterialModule } from './material/material.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { ProductContentComponent } from './product-content/product-content.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PayingMethodsComponent } from './paying-methods/paying-methods.component';
import { DeliveryInfoComponent } from './delivery-info/delivery-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    NavigationComponent,
    RegisterComponent,
    CardComponent,
    FooterComponent,
    ProductContentComponent,
    ShoppingCartComponent,
    PayingMethodsComponent,
    DeliveryInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatMenuModule,
    MatToolbarModule,
    FlexLayoutModule,
    BrowserModule, 
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
