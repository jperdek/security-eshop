import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as bcrypt from 'bcryptjs';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resend-password',
  templateUrl: './resend-password.component.html',
  styleUrls: ['./resend-password.component.css']
})
export class ResendPasswordComponent implements OnInit {

  constructor(private _ourHttpClient:HttpClient,private router:Router) { }
  
  form: FormGroup;
  email: string;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
    });
  }

  submit(): void {
    
  }

  public searchAccordingName(email:string, purePassword: string, hashedPassword: string): void {
    var dictionary = {}
    dictionary['email'] = email;
    dictionary['purePassword'] = purePassword;
    dictionary['hashedPassword'] = hashedPassword;

    this._ourHttpClient.post("http://localhost:8080/changePasswd", dictionary, { responseType: 'text' as 'json' }).subscribe(
      (response)=>{
        console.log(response);
        this.router.navigateByUrl('/signin');
        return;
      },
      (error)=>{
        console.error(error);
        return;
      });

  }

  resendPassword(form: string){
    var purePassword: string = CryptoJS.lib.WordArray.random(20).toString();
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword:string = bcrypt.hashSync(purePassword, salt);
    console.log(form['email']);

    this.searchAccordingName(form['email'], purePassword, hashedPassword)
  }

}
