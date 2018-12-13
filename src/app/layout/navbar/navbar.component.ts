import { Component, OnInit } from '@angular/core'
import { AppService } from 'src/app/core/app.service';

@Component({
    template: `<h1>{{ title | uppercase | lowercase }} - {{ price  | currency: 'EUR' : 'code': '3.2-5' : 'fr' }}</h1>
    <p>{{ now | date: 'd/M/yyyy' }}</p>
    <button routerLink="/login">Se connnecter</button>
    <app-search [username]="firstname" (onSearch)="listenSearch($event)"></app-search>`, //on donne une valeur par défault à partir du parent navbar.component to search.component
    selector: 'app-navbar'
})

export class NavbarComponent implements OnInit {
    title: string = 'Mon Appli'
    firstname: string = 'Jimm'
    price: number = 15.12
    now: Date = new Date()

   constructor( private appModel: AppService){
        this.appModel = appModel
    }

    ngOnInit(){
       this.title = this.appModel.getTitle()
    }

    listenSearch(name: string){
        console.log(name)
    }

}