import { Component } from '@angular/core'

@Component({
    /*template: `<app-navbar></app-navbar>
    <h1>Mon app</h1>
    <app-users></app-users>`,*/
    template : `<router-outlet></router-outlet>`,
    selector: 'app-root'
})
export class AppComponent{


}