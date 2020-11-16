import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';

interface DeliveryCity {
  value: string;
  viewValue: string;
}

interface DeliveryCompanies {
  disabled?: boolean;
  name: string;
  city: DeliveryCity[];
}

@Component({
  selector: 'app-delivery-info',
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.css']
})

export class DeliveryInfoComponent implements OnInit {

  constructor(private _ourHttpClient:HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  name: string;
  surname: string;
  address: string;
  city: string;
  post: string;
  street: string;
  postalcode: string;
  deliveryplace: string;

  color: ThemePalette = 'accent';
  checked = true;

  deliveryControl = new FormControl();
  deliveryGroups: DeliveryCompanies[] = [
    {
      name: 'DHL',
      city: [
        { value: 'trnava56', viewValue: 'Trnava 56'},
        { value: 'kralovany512', viewValue: 'Kralovany 512'},
        { value: 'liptMikulas12', viewValue: 'Liptovsky Mikulas 12'}
      ]
    },
    {
      name: 'Geis',
      city: [
        { value: 'nitra58', viewValue: 'Nitra 58'},
        { value: 'pezinok78', viewValue: 'Pezinok 78'},
        { value: 'gabcikovo69', viewValue: 'Gabcikovo 69'},
        { value: 'liptMikulas74', viewValue: 'Liptovsky Mikulas 74'}
      ]
    },
    {
      name: 'REMAX',
      disabled: true,
      city: [
        { value: 'pezinok123', viewValue: 'Pezinok 123'},
        { value: 'bratislava27', viewValue: 'Bratislava 27'},
        { value: 'kosice13', viewValue: 'Kosice 13'}
      ]
    }
  ];

  public setDelivery(deliveryInfo: any): void {
    console.log(deliveryInfo);
  }
}
