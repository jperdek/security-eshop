import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  id: number;
  name: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', email: "e@e.com"},
  {id: 2, name: 'Helium', email: "kkklll@kkklll.com"},
];

@Component({
  selector: 'app-manage-board',
  templateUrl: './manage-board.component.html',
  styleUrls: ['./manage-board.component.css']
})
export class ManageBoardComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'change-username', 'change-email'];
  dataSource = ELEMENT_DATA;
  name:string;
  description:string;
  price:number;
  url:string;
  quantity:number;

  phrase: string;
  option: string;
  elements: any;

  constructor(private _ourHttpClient: HttpClient) { }

  ngOnInit(): void {
    this.searchAccordingEmail("ja");
  }

  test(){
    this.searchAccordingName("a");
    this.searchAccordingEmail("a");
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

  public search(phrase:string, option:string){

    if(option == "name"){
      this.searchAccordingName(phrase);
    } else if(option == "email"){
      this.searchAccordingEmail(phrase);
    } else {
      console.log("Unknown option to search!");
    }
  }

  public searchAccordingName(name:string): void {
    var dictionary = {}
    dictionary['name'] = name;

    this._ourHttpClient.post("http://localhost:8080/name", dictionary, { responseType: 'text' as 'json' }).subscribe(
      (response)=>{
        console.log(response);
        this.elements = JSON.parse(response);
        return dictionary;
      },
      (error)=>{
        console.error(error);
        return dictionary;
      });

  }

  public searchAccordingEmail(email:string): void {
    var dictionary = {}
    dictionary['email'] = email;

    this._ourHttpClient.post("http://localhost:8080/email", dictionary, { responseType: 'text' as 'json' }).subscribe(
      (response)=>{
        console.log(response);
        this.elements = JSON.parse(response);
        return dictionary;
      },
      (error)=>{
        console.error(error);
        return dictionary;
      });

  }

}
