import { MessageComponent } from './../message/message.component';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatSliderChange } from '@angular/material/slider';
interface Order {
  userName: string;
  shipmentAddress: string;
  cartInfo: { products: [], finalPrice: number };
  creditCardInfo: { iban: number, valid: string, cvc: string }

}
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
  payment: number
  order: Order = { userName: "", shipmentAddress: "", cartInfo: { products: [], finalPrice: 0 }, creditCardInfo: { iban: 0, valid: "", cvc: "" } };


  example = {
    "userName": "Viktors",
    "shipmentAddress": "between Earth and Moon",
    "cartInfo": {
      "products": [
        {
          "name": "orange",
          "description": "orange orange",
          "url": "orange.com",
          "quantity": 1,
          "price": 2
        }
      ],
      "finalPrice": 10
    },
    "creditCardInfo": {
      "iban": 348346,
      "valid": "24/11/2020",
      "cvc": "000"
    }
  };
  constructor(private _ourHttpClient: HttpClient, private _snackBar: MatSnackBar, private router: Router) { }

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
    if (cartString !== null) {
      var dictionary = JSON.parse(cartString);
      for (var record in dictionary) {
        wholePrice = wholePrice + dictionary[record]['quantity'] * dictionary[record]['price'];
      }
      return wholePrice;
    }
    return -1;
  }

  getDeliveryInformation(): any {
    var deliveryInfo = localStorage.getItem("deliveryInfo");
    if (deliveryInfo === null) {
      return null;
    } else {
      return JSON.parse(deliveryInfo);
    }
  }

  saveCard(cardInfo: any): void {
  }


  public saveOrder(cardInfo:any) {
    var deliveryInfo = this.getDeliveryInformation();

    this.order.userName = deliveryInfo.name + deliveryInfo.surname;
    this.order.shipmentAddress = deliveryInfo.address;
    this.order.cartInfo.products = [];
    this.order.cartInfo.finalPrice = this.payment;
    
    if(cardInfo != null) {
      this.order.creditCardInfo.iban = cardInfo.cardnumber;
      this.order.creditCardInfo.valid = cardInfo.carddate;
      this.order.creditCardInfo.cvc = cardInfo.seccode;
    } else {
      this.order.creditCardInfo.iban = 0;
      this.order.creditCardInfo.valid = "none";
      this.order.creditCardInfo.cvc = "none";
    }

    console.log("nice")


    return this._ourHttpClient.post("http://localhost:8080/create/order", this.order).subscribe(
      (response) => {
        console.log(response);

        if (response != null) {
          console.log(response);

        } else {
        }
      },
      (error) => {

        if (error.error.text != "error")
          this.router.navigateByUrl('/completed');
        else
         this._snackBar.open('Not successfull', '', {
            duration: 1000
          });
      })





    // this.router.navigateByUrl('/completed');
  }

  public cardPayment(cardInfo: any) {
    return this.saveOrder(cardInfo);
  }

  openSnackBar() {
    this._snackBar.openFromComponent(MessageComponent, {
      duration: 10 * 1000,
    });
  }

  onInputChange(event: MatSliderChange) {
    this.payment = event.value;
  }
  public bankTransferPayment(): void {
    this.saveOrder(null);

    this.router.navigateByUrl('/completed');
  }

  public cashOnDeliveryPayment(): void {
    this.saveOrder(null);

    this.router.navigateByUrl('/completed');
  }

}
