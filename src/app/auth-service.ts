import { Injectable } from '@angular/core'


@Injectable()
export class AuthService {

    private loggedInStatus = false; //JSON.parse(localStorage.getItem('loggedIn') || 'false');

    setLoggedIn(value: boolean, name: string): void{
        this.loggedInStatus = value;
        console.log('setting');
        console.log(this.loggedInStatus);
        localStorage.setItem("loggedIn", name);
    }

    get isLoggedIn(): boolean {
        console.log(localStorage.getItem('loggedIn') || this.loggedInStatus);
        return this.loggedInStatus;
    }

    getUserDetails(username: string, password:string): void {

    }
}
