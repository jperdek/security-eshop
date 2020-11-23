import { StorageService } from './../StorageService';
import { BlockScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  numberOfProductsInCart;
  constructor(private _auth: AuthService, private _localStorage: StorageService) {

  }
  ngOnInit(): void {
  }



  public isLogged(): boolean {

    return localStorage.getItem("loggedIn") !== null;
  }

  public logout(): void {
    localStorage.removeItem("loggedIn");

  }
}
