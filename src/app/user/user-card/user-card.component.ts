import { Component, Input, Output, EventEmitter } from '@angular/core'
import { UserService} from 'src/app/core/user.service'

@Component({
 template: `
 <h3>{{ user.name }}</h3>
 <h3>{{ user.email }}</h3>
 <button (onConfirm)="removeUser()" appConfirm="Etes Vous sûr ?" [appConfirmUsername]="user.name"> {{ 'REMOVE' | lang:'fr' }}</button>
 <button [routerLink]="['user', user.id]">Modifier</button>
 `,
 selector: 'app-user-card'

})

export class UserCardComponent {
    @Input() user:any
    @Output() onDelete: EventEmitter<void> = new EventEmitter()

    constructor(private userModel: UserService){}

    removeUser(){
        this.userModel.delete(this.user.id).subscribe(() => {
            this.onDelete.emit()
        })
    }



}