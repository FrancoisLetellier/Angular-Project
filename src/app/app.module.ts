import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
//import { NavbarModule } from './navbar/navbar.module';
//import { UsersModule} from './user/users.module';
import { registerLocaleData } from '@angular/common'
import  localfr from '@angular/common/locales/fr' 
import { appRouter } from './app.router';
import { LoginModule } from './login/login.module';
import { LayoutModule } from './layout/layout.module';
import { AppService } from './core/app.service';
import { HttpClientModule } from '@angular/common/http'
import { layoutRouter } from './layout/layout.router';


registerLocaleData(localfr, 'fr')



@NgModule({
    imports: [BrowserModule, LoginModule, LayoutModule, appRouter, layoutRouter, HttpClientModule], // NavbarModule, UsersModule,
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [AppService]
})

export class AppModule{ }