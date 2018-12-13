import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class AuthService{
    constructor(private http: HttpClient){}
        login(data: any){
            return this.http.post('https://reqres.in/api/login', data)
            .toPromise()
            .then((res: any) => {
                this.token =res.token
            })
        }
        set token(value){
            localStorage.setItem('angular-token', value)
        }
        get token(){
            return localStorage.getItem('angular-token')
        }
    }
