import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-paying-methods',
  templateUrl: './paying-methods.component.html',
  styleUrls: ['./paying-methods.component.css']
})
export class PayingMethodsComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

}
