import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
