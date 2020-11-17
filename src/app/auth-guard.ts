import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth-service';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private auth: AuthService, private router: Router) {}

    canActivate ( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        console.log(this.auth.isLoggedIn);
        console.log('heeeeee');
        if(!this.auth.isLoggedIn ) {
            this.router.navigate(['/signin'])
        }
        return this.auth.isLoggedIn;
    }

    setLoggedIn(value: boolean, name:string){
        this.auth.setLoggedIn(value, name);
    }
}
