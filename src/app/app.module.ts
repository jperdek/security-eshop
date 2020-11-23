// import { ShoppingCartService } from './shopping-cart-sevice';
import { StorageService } from './StorageService';
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

import { HttpClientModule } from '@angular/common/http';
import { MessageComponent } from './message/message.component';
import { UserCreatedComponent } from './user-created/user-created.component';
import { OrderCompletedComponent } from './order-completed/order-completed.component';
import { WorkspaceComponent } from './workspace/workspace.component';

import { AuthGuard } from './auth-guard';
import { AuthService } from './auth-service';

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
    DeliveryInfoComponent,
    MessageComponent,
    UserCreatedComponent,
    OrderCompletedComponent,
    WorkspaceComponent,

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
    FormsModule,
    HttpClientModule, 
  ],
  providers: [AuthGuard, AuthService,StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
