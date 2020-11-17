import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paying-methods',
  templateUrl: './paying-methods.component.html',
  styleUrls: ['./paying-methods.component.css']
})
export class PayingMethodsComponent implements OnInit {

  constructor(private _ourHttpClient:HttpClient, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  cardnumber: string;
  namecard: string;
  carddate: string;
  seccode: string;

  public setBankTransfer(): void {
    console.log("Bank transfer!");
    this.router.navigateByUrl('/completed');
  }

  public setCashDelivery(): void {
    console.log("Cash delivery!");
    this.router.navigateByUrl('/completed');
  }

  public setCardPayment(card:any): void {
    console.log(card);
    this.router.navigateByUrl('/completed');
  }
}
