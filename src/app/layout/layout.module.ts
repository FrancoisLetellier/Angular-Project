import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { NavbarModule } from './navbar/navbar.module';
import { UsersModule } from '../user/users.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { CommonModule } from '@angular/common';
import { layoutRouter } from './layout.router';


@NgModule({
    imports: [CommonModule, NavbarModule, UsersModule, UserProfileModule, layoutRouter],
    declarations: [LayoutComponent],
   
})

export class LayoutModule{

}