import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { SearchComponent } from '../../search/search.component';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { appRouter } from 'src/app/app.router';

@NgModule({
    imports: [FormsModule, CommonModule, SharedModule, appRouter],
    declarations: [NavbarComponent, SearchComponent],
    exports: [NavbarComponent]
})

export class NavbarModule{

}