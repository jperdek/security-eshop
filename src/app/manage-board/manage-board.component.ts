import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  id: number;
  username: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, username: 'Hydrogen', email: "e@e.com"},
  {id: 2, username: 'Helium', email: "kkklll@kkklll.com"},
];

@Component({
  selector: 'app-manage-board',
  templateUrl: './manage-board.component.html',
  styleUrls: ['./manage-board.component.css']
})
export class ManageBoardComponent implements OnInit {

  displayedColumns: string[] = ['id', 'username', 'email', 'change-username', 'change-email'];
  dataSource = ELEMENT_DATA;
  name:string;
  description:string;
  price:number;
  url:string;
  quantity:number;

  constructor(private _ourHttpClient: HttpClient) { }

  ngOnInit(): void {
  }

  public insert(name:string, description:string, price:number, url:string, quantity:number): void {
    var dictionary = {}
    dictionary['name'] = name;
    dictionary['description'] = description;
    dictionary['price'] = price;
    dictionary['URL'] = url;
    dictionary['quantity'] = quantity;

    this._ourHttpClient.post("http://localhost:8080/create/product", dictionary, { responseType: 'text' as 'json' }).subscribe(
      (response)=>{
        console.log(response);
        return dictionary;
      },
      (error)=>{
        console.error(error);
        return dictionary;
      });

  }
}
