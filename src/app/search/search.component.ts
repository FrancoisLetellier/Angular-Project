import { Component, Input, Output, EventEmitter} from '@angular/core'

@Component({

templateUrl: 'search.component.html',

       /*template : 
    `<input type="text" [(ngModel)]="username"> 
    <button (click) ="search($event)" *ngIf="username">ok</button>
    <ul>
    <li *ngFor="let name of names; let i = index; let isFirst = first">{{ isFirst }} - {{ name }}</li>
    </ul>`,*/
     // on peut remplacer [value] par value et mettre {{ username }}, <input type="text" [value]="username">,  (click) ="search('hello', 42)"",
     selector: 'app-search'  // *ngIf="username != ''" ne pas oublié * sinon ça ne marche pas (modification structurel) modification du DOM
// pour manimuler les boucle  {{ i + 1 }} - {{ name }} (let i), is First, isEven

}) 

export class SearchComponent{
    /*username: string = 'jim'*/ 
    // crochet pour des valeur entréé [] et paranthèse pour valeur sortie ()
   /* search(str, nb){
        console.log(str, nb)*/
@Input() username : string
@Output() onSearch: EventEmitter<string> = new EventEmitter() // <string> donne le type d'event

names: Array<string> = ['jim', 'ana', 'ben']

        search(ev:Event){
       /*     console.log(this.username)*/
       this.onSearch.emit(this.username)
        }

    }
