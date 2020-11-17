import { BlockScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }

  public isLogged(): boolean {
    return localStorage.getItem("loggedIn") !== null;
  }

  public logout(): void {
    localStorage.removeItem("loggedIn");
    this._auth.setLoggedIn(false, "");
    document.getElementById("signup").style.display= "block";
    document.getElementById("signin").style.display= "block";
    document.getElementById("logout").style.display= "none";
  }
}
