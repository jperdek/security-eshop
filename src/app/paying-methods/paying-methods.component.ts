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

  cardnumber: string;
  namecard: string;
  carddate: string;
  seccode: string;
  minPriceBankTransfer: number;
  maxPriceBankTransfer: number;
  minPricePaymentMethod: number;
  maxPricePaymentMethod: number;
  minPriceCashOnDelivery: number;
  maxPriceCashOnDelivery: number;

  constructor(private _ourHttpClient:HttpClient, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    var wholePrice = this.countWholePrice();
    this.minPriceBankTransfer = wholePrice;
    this.maxPriceBankTransfer = this.minPriceBankTransfer + 100;
    this.minPricePaymentMethod = wholePrice;
    this.maxPricePaymentMethod = this.minPricePaymentMethod + 100;
    this.minPriceCashOnDelivery = wholePrice + 2.0;
    this.maxPriceCashOnDelivery = this.minPriceCashOnDelivery + 100;
  }

  countWholePrice(): number {
    var cartString = localStorage.getItem("shoppingCartProducts");
    var wholePrice: number = 0;
    if(cartString !== null){
      var dictionary = JSON.parse(cartString);
      for(var record in dictionary){
        wholePrice = wholePrice + dictionary[record]['quantity'] * dictionary[record]['price'];
      } 
      return wholePrice;
    }
    return -1;
  }

  getDeliveryInformation():any {
    var deliveryInfo = localStorage.getItem("deliveryInfo");
    if( deliveryInfo === null){
      return null;
    } else {
      return JSON.parse(deliveryInfo);
    }
  }

  saveCard(cardInfo: any): void {
  }

  public cardPayment(cardInfo: any): void {
    var deliveryInfo = this.getDeliveryInformation(); 

    this.router.navigateByUrl('/completed');
  }

  public bankTransferPayment(): void {
    var deliveryInfo = this.getDeliveryInformation(); 

    this.router.navigateByUrl('/completed');
  }

  public cashOnDeliveryPayment(): void {
    var deliveryInfo = this.getDeliveryInformation(); 

    this.router.navigateByUrl('/completed');
  }

}
