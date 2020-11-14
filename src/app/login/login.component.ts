import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { MessageComponent } from '../message/message.component';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: FormGroup

  constructor(private _ourHttpClient:HttpClient, private _snackBar: MatSnackBar, private router: Router) { }
  customer: any;
  name:string;
  password: string;

  ngOnInit(): void {

    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });


  }

  public getUser(user:any):any {
    console.log(user.name);
      return this._ourHttpClient.get("http://localhost:8080/getUser?name=" + user.name).subscribe(
        (response)=>{
          console.log(response);
          const salt = bcrypt.genSaltSync(10);
          var passBCrypt1, passBCrypt2;

          if(response != null){
            passBCrypt1 = response['password']; //bcrypt.hashSync(response['password'], salt);
            passBCrypt2 = bcrypt.hashSync(user.password, salt); 
          }

          if( response!= null && passBCrypt1  == passBCrypt2){
            this.router.navigateByUrl('/');
          } else {
            this.router.navigateByUrl('/signin');
            this.openSnackBar();
          }
        },
        (error)=>{
          console.error(error);
        })
  }

  openSnackBar() {
    this._snackBar.openFromComponent(MessageComponent, {
      duration: 10 * 1000,
    });
  }

  public logError(error){
    console.error("Occured error: "+error);
      return Observable.throw(error || "Internal server error - undefined error!");
  }

  submit() {
    if (this.form.status != "INVALID") {
      this.submitEM.emit(this.form.value);
    }
    else {
      let snackBarRef = this._snackBar.open('Please fill up all required fields', '', {
        duration: 1000
      });
    }
  }

  @Output() submitEM = new EventEmitter();
}
