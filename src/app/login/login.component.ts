import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });


  }
  submit() {
    if (this.form.status != "INVALID") {
      this.submitEM.emit(this.form.value);
    }
    else {
      let snackBarRef = this._snackBar.open('Please fill up all required fields');

    }
  }
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}
