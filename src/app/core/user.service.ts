import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';



@Injectable({
    providedIn: 'root' // Angular 6+
})

export class UserService{
  url : string = 'https://jsonplaceholder.typicode.com/users'
  
  constructor(private http: HttpClient){}





    fetch(){

   /* return new Promise((resolve, reject) => {
          this.http.get(this.url).subscribe((users) => {
              resolve(users)}, (err) => {
                  reject(err)
              })
          })  
   */
  return this.http.get(this.url).toPromise() 
          
        }

        create(data: any){
            return this.http.post(this.url, data);
        }

        delete(id: number){
            return this.http.delete(this.url + '/' + id)
        }

        get(id : number){
            return this.http.get(this.url + '/' + id)
        }

        update(id : number, data:any){
            return this.http.put(this.url + '/' + id, data)
        }

        _checkEmail(input: FormControl){
            return new Promise((resolve, reject) => {
                this.http.get(this.url + '/1').subscribe((user: any) => {
                    resolve(user.email == input.value ? { emailNotUniq: true } : null )
                })
            })
        }
        
        checkEmail(input: FormControl){
            return this.http.get(this.url + '/1').pipe(
                map((user: any) =>{
                    return user.email == input.value ? { emailNotUniq: true } : null 
                })
            )
        } 
        
        }
    
    
