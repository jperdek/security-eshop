import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public deleteComponent(class_component: string): void {
    var productParts:any = document.getElementsByClassName(class_component);
    var i:number;
    
    for(i=0; i< productParts.length; i=i + 1){
      console.log(productParts[i])
      productParts[i].style.display= "none";
      this.updateLocalPrice(class_component.split('-').reverse()[0], true);
    }
  }

  public increase(class_component: string): void{
    var counterInputs:any = document.getElementsByClassName(class_component);
    var i:number;
    
    for(i=0; i< counterInputs.length; i=i + 1){
      console.log(counterInputs[i])
      counterInputs[i].value = parseInt(counterInputs[i].value) + 1;
      this.updateLocalPrice(class_component.split('-').reverse()[0], false);
    }
  }

  public decrease(class_component: string): void{
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
      var priceArrays = document.querySelectorAll('*[class^="price-prod-"]');
      var wholePrice:number;
      var i:number;
      wholePrice = 0.0;
  
      for(i=0; i< priceArrays.length; i=i + 1){
        wholePrice = wholePrice + parseFloat(priceArrays[i].innerHTML.split(" &euro;")[0]);
      }

      wholePrice = wholePrice / 2.0;
      for(i=0; i< finalPriceArray.length; i=i + 1){
        finalPriceArray[i].innerHTML = wholePrice.toString() + " &euro;";
      }
    }
}
