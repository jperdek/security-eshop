import { Injectable } from '@angular/core'


@Injectable()
export class AuthService {

    private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');

    setLoggedIn(value: boolean, name: string): void{
        this.loggedInStatus = value;
        localStorage.setItem("loggedIn", name);
    }

    get isLoggedIn() {
        return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
    }

}
