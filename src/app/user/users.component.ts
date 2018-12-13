import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user.service';

@Component({
    templateUrl: 'users.component.html',
   selector: 'app-users'
})

export class UsersComponent implements OnInit {
    nbSelected: number
    extSelected:string = 'all'
    extensions: Array<string> = ['tv', 'biz', 'io', 'me']
    users: Array<any>
    constructor(private userModel: UserService){

    }
  ngOnInit(): void {
   this.userModel.fetch().then((users: Array<any>)=>{
       this.users = users
   })
  }

  createUser(){
       this.userModel.create({
           name: 'ana',
           email:'anan@gmail.com'
       })
       .subscribe((userCreated: any) => {
            this.users.push(userCreated)
       })
}

deleteUser(id: number){
/*const index = this.users.findIndex(user => user.id == id)
this.users.splice(index, 1)    */
this.users = this.users.filter(user => user.id != id)
}




}
