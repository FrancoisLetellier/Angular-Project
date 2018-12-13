import { Component} from '@angular/core'

@Component({
    template: `<app-navbar></app-navbar>
   <router-outlet></router-outlet>`,  //<app-users></app-users>
    selector: 'app-layout'
})


export class LayoutComponent{

}