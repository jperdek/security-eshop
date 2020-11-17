import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private _ourHttpClient:HttpClient, private router: Router) { }
  products: any;

  ngOnInit(): void {
    this.products = this.getProducts();
  }

  public deleteComponent(class_component: string, product_title:string): void {
    var productParts:any = document.getElementsByClassName(class_component);
    var i:number;
    console.log("DELETE!!");
    console.log(class_component);

    for(i=0; i< productParts.length; i=i + 1){
      console.log(productParts[i])
      productParts[i].style.display= "none";
      this.updateLocalPrice(class_component.split('-').reverse()[0], true);
    }

    this.deleteFromCart(product_title);
  }

  public increase(class_component: string, product_title:string): void{
    var counterInputs:any = document.getElementsByClassName(class_component);
    var i:number;
    
    this.increaseFromCart(product_title);

    for(i=0; i< counterInputs.length; i=i + 1){
      console.log(counterInputs[i])
      counterInputs[i].value = parseInt(counterInputs[i].value) + 1;
      this.updateLocalPrice(class_component.split('-').reverse()[0], false);
    }
  }

  public decrease(class_component: string, product_title:string): void{
    this.decreaseFromCart("comp-"+class_component.split('-').reverse()[0], product_title);

    var counterInputs:any = document.getElementsByClassName(class_component);
    var i:number;
  

    for(i=0; i< counterInputs.length; i=i + 1){
      console.log(counterInputs[i])
      if(counterInputs[i].value - 1 >= 0){
        counterInputs[i].value = parseInt(counterInputs[i].value) - 1;
        this.updateLocalPrice(class_component.split('-').reverse()[0], false);
      }
    }
   
  }

  public updateLocalPrice(order: string, deleted:boolean): void{
    console.log("value "+ order);
    var counterInputs:any = document.getElementsByClassName("counter-" + order);
    var priceInputs:any = document.getElementsByClassName("price-prod-" + order);
    var priceOneInputs:any = document.getElementsByClassName("price-one-" + order);
    var i:number;
    
    for(i=0; i< counterInputs.length; i=i + 1){
      priceInputs[i].innerHTML = (priceOneInputs[i].value * counterInputs[i].value).toString() + " &euro;";
    }
    this.updateFinalPrice();
  }

  public updateFinalPrice():void {
      var finalPriceArray = document.getElementsByClassName("whole-price");
      var priceArrays = document.querySelectorAll('*[class*="price-prod-"]');
      var wholePrice:number;
      var i:number;
      wholePrice = 0.0;
      console.log( priceArrays.length);
      for(i=0; i< priceArrays.length; i=i + 1){
        console.log(priceArrays[i].innerHTML);
        wholePrice = wholePrice + parseFloat(priceArrays[i].innerHTML.split(" &euro;")[0]);
      }

      wholePrice = wholePrice / 2.0;
      for(i=0; i< finalPriceArray.length; i=i + 1){
        finalPriceArray[i].innerHTML = wholePrice.toString() + " &euro;";
      }
    }

  public getProducts(): any{
    console.log(localStorage.getItem("shoppingCartProducts"));
    var cartString = localStorage.getItem("shoppingCartProducts");
    if(cartString === null){
      return null;
    } else {
      var dictionary = JSON.parse(cartString);
      return Object.keys(dictionary).map(function(key){
        return dictionary[key]; 
    });;
    }
  }

  public deleteFromCart(title: string): void {
    var cartString = localStorage.getItem("shoppingCartProducts");
    if(cartString !== null){
      var dictionary = JSON.parse(cartString);
      if( title in dictionary){
        console.log("Delete");
        delete dictionary[title];
        localStorage.setItem("shoppingCartProducts", JSON.stringify(dictionary));
      }
    }
  }

  public increaseFromCart(title: string): void {
    var cartString = localStorage.getItem("shoppingCartProducts");
    if(cartString !== null){
      var dictionary = JSON.parse(cartString);
      if( title in dictionary){
        dictionary[title]['quantity'] = dictionary[title]['quantity'] + 1;
        localStorage.setItem("shoppingCartProducts", JSON.stringify(dictionary));
      }
    }
  }

  public decreaseFromCart(class_component: string, title: string): void {
    var cartString = localStorage.getItem("shoppingCartProducts");
    if(cartString !== null){
      var dictionary = JSON.parse(cartString);
      if( title in dictionary){
        if (dictionary[title]['quantity'] - 1 > 0 ){
          dictionary[title]['quantity'] = dictionary[title]['quantity'] - 1;
          localStorage.setItem("shoppingCartProducts", JSON.stringify(dictionary));
        } else {
          console.log("DELETE");
          this.deleteComponent(class_component, title);
        }        
      }
    }
  }
}
